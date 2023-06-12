import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Avatar from "@/models/Avatar";

export const GET = async (req) => {

    try {
        await connect();
        const avatars = await Avatar.find();

        return new NextResponse(avatars, {status: 200});
    } 
    catch (err) {
        return new NextResponse(err, {status: err.status});
    }
};