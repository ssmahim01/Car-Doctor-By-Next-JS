import { NextResponse } from "next/server";

export const POST = async (req) => {
    const bookingData = await req.json();
    console.log(bookingData);
    return NextResponse.json({});
}