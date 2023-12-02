
import { connectToDB } from "@/utils/database";
import Image from "@/models/image";

export const POST = async (request) => {
    const { userId, image, title, tag } = await request.json();

    try {
        await connectToDB();
        const newImage = new Image({ creator: userId, image, title, tag });

        await newImage.save();
        return new Response(JSON.stringify(newImage), { status: 201 })
    } catch (error) {
        return new Response("Failed to upload a new Image", { status: 500 });
    }
}
