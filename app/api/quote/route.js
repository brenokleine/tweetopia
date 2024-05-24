import { connectToDB } from "@/utils/database";
import Quote from "@/models/quote";

export const GET = async (req, res) => {
    try {
        await connectToDB();
        const quotes = await Quote.find({}).populate("author");
        
        return new Response(JSON.stringify(quotes), {
            status: 200
        })

    } catch (error) {
        return new Response('failed to fetch prompts', {
            status: 500
        })
    }
}