import { connectToDB } from "@/utils/database";
import Image from "@/models/image";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const images = await Image.find({
            creator: params.id
        }).populate('creator')
        return new Response(JSON.stringify(images), { status: 200 })
    } catch (error) {
        return new Response('Failed to fetch all images', { status: 500 })
    }
}