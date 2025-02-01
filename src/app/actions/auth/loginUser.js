"use server"
import mongoDB, { collectionNames } from "@/lib/mongoDB";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
    const { email, password } = payload;
    const userCollection = mongoDB(collectionNames.userCollection);
    const user = await userCollection.findOne({ email });

    if (!user) return { success: false };
    const isPasswordOk = bcrypt.compare(user.password, password);
    if (!isPasswordOk) return { success: false };
    return user;
}