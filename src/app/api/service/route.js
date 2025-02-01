import mongoDB, { collectionNames } from "@/lib/mongoDB";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const bookingData = await req.json();
    const bookingCollection = mongoDB(collectionNames.bookingCollection);
    const insertResult = await bookingCollection.insertOne(bookingData);
    return NextResponse.json(insertResult);
}