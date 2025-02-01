import mongoDB, { collectionNames } from "@/lib/mongoDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async(req, {params}) => {
    const { id } = await params;
    const servicesCollection = mongoDB(collectionNames.serviceCollection);
    const query = { _id: new ObjectId(id) };
    const service = await servicesCollection.findOne(query);

    return NextResponse.json(service);
}
