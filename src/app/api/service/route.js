import { authOptions } from "@/lib/authOptions";
import mongoDB, { collectionNames } from "@/lib/mongoDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const session = await getServerSession(authOptions);
    // console.log(session);
    // console.log(session?.user?.email);
    if (session) {
        const email = session?.user?.email
        // console.log(email);
        const bookingCollection = mongoDB(collectionNames.bookingCollection)
        const result = await bookingCollection.find({ email }).toArray()

        return NextResponse.json(result)
    }

    return NextResponse.json({})
}

export const POST = async (req) => {
    const bookingData = await req.json();
    const bookingCollection = mongoDB(collectionNames.bookingCollection);
    const insertResult = await bookingCollection.insertOne(bookingData);
    return NextResponse.json(insertResult);
}