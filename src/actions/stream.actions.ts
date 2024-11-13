"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;


export const tokenProvider = async () => {
    const user = await currentUser();

    if (!user) throw new Error('User is not logged in');
    if(!apiKey) throw new Error('Missing Stream API Key');
    if(!apiSecret) throw new Error('Missing Stream Secret Key');

    const client = new StreamClient(apiKey, apiSecret);
}