import mongoDB, { collectionNames } from "@/lib/mongoDB"
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { id } = await params;
    const bookingCollection = mongoDB(collectionNames.bookingCollection);
    const query = { _id: new ObjectId(id) };
    const findBooking = await bookingCollection.findOne(query);

    return NextResponse.json(findBooking);
}

export const PATCH = async (req, { params }) => {
    const { id } = await params;
    const body = await req.json();
    const bookingCollection = mongoDB(collectionNames.bookingCollection);
    const query = { _id: new ObjectId(id) };
    const filter = {
        $set: { ...body }
    }

    const option = { upsert: true };
    const updateBooking = await bookingCollection.updateOne(query, filter, option);

    revalidatePath("/my-bookings");
    return NextResponse.json(updateBooking);
}