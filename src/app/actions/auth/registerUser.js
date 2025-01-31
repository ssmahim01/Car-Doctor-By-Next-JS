"use server"
import mongoDB, { collectionNames } from "@/lib/mongoDB"
import bcrypt from "bcrypt"

export const registerUser = async (payload) => {
    // console.log(payload);
    const {email, password} = payload;
    if(!email || !password) return {success: false};

    const userCollection = mongoDB(collectionNames.userCollection);
    const user = await userCollection.findOne({email: payload?.email});

    if(!user){
        const hashedPassword = await bcrypt.hash(password, 10);
        payload.password = hashedPassword;
        const postResult = await userCollection.insertOne(payload);
        const {acknowledged, insertedId} = postResult;
        return {acknowledged, insertedId};
    }

    return {success: false};
}