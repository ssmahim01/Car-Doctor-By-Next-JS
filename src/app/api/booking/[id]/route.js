import { authOptions } from "@/lib/authOptions";
import mongoDB, { collectionNames } from "@/lib/mongoDB"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { id } = await params;
    const bookingCollection = mongoDB(collectionNames.bookingCollection);
    const query = { _id: new ObjectId(id) };
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const findBooking = await bookingCollection.findOne(query);
    const isOwner = email === findBooking.email;
    if(isOwner){
        return NextResponse.json(findBooking);
    }else{
        return NextResponse.json({ message: "Forbidden GET action" }, { status: 403 })
    }
}

export const PATCH = async (req, { params }) => {
    const { id } = await params;
    const query = { _id: new ObjectId(id) };
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const bookingCollection = mongoDB(collectionNames.bookingCollection);
    const currentBookingData = await bookingCollection.findOne(query);
    const isOwner = email === currentBookingData.email;

    if (isOwner) {
        const body = await req.json();
        const filter = {
            $set: { ...body }
        }

        const option = { upsert: true };
        const updateBooking = await bookingCollection.updateOne(query, filter, option);

        revalidatePath("/my-bookings");
        return NextResponse.json(updateBooking);
    } else {
        return NextResponse.json({ message: "Forbidden PATCH action" }, { status: 403 })
    }

}