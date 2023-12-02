import { connectToDB } from "@/utils/database";
import Image from "@/models/image";

// GET (read)
export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const image = await Image.findById(params.id).populate('creator');
        if (!image) return new Response("Image not found", { status: 404 });

        return new Response(JSON.stringify(image), { status: 200 })
    } catch (error) {
        return new Response('Failed to fetch all images', { status: 500 })
    }
}

// PATCH (update)
export const PATCH = async (request, { params }) => {
    const { image, title, tag } = await request.json();

    try {
        await connectToDB();

        const existingImage = await Image.findById(params.id);

        if (!existingImage) return new Response("Image not found", { status: 404 })

        existingImage.image = image;
        existingImage.title = title;
        existingImage.tag = tag;

        await existingImage.save();

        return new Response(JSON.stringify(existingImage), { status: 200 })
    } catch (error) {
        return new Response("Failed to update image", { status: 500 })
    }
}


// DELETE (delete)
export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        await Image.findByIdAndRemove(params.id);

        return new Response("Image deleted successfully", { status: 200 })
    } catch (error) {
        return new Response("Failed to delete Image", { status: 500 })
    }
}