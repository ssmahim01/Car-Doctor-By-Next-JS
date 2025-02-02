import { authOptions } from "@/lib/authOptions";
import mongoDB, { collectionNames } from "@/lib/mongoDB";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { id } = await params;
    const servicesCollection = mongoDB(collectionNames.serviceCollection);
    const query = { _id: new ObjectId(id) };
    const service = await servicesCollection.findOne(query);

    return NextResponse.json(service);
}

export const DELETE = async (req, { params }) => {
    const { id } = await params;
    const query = { _id: new ObjectId(id) };
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const bookingCollection = mongoDB(collectionNames.bookingCollection);
    const currentBooking = await bookingCollection.findOne(query);
    const isOwner = email === currentBooking?.email;
    if (isOwner) {
        const deleteResult = await bookingCollection.deleteOne(query);
        revalidatePath("/my-bookings");
        return NextResponse.json(deleteResult);
    } else {
        return NextResponse.json({ success: false, message: "Forbidden Access" }, { status: 401 })
    }
}