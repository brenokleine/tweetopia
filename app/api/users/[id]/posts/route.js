import { connectToDB } from "@/utils/database";
import Quote from "@/models/quote";

export const GET = async (req, { params }) => {
    try {
        await connectToDB();

        console.log("Connected to database");
        
        const quotes = await Quote.find({author: params.id}).populate("author");

        return new Response(JSON.stringify(quotes), {
            status: 200
        })

    } catch (error) {
        return new Response('failed to fetch prompts', {
            status: 500
        })
    }
}

