import { connectToDB } from "@/utils/database";
import Quote from "@/models/quote";

export const POST = async (req, res) => {
    const { quote, tag, userId } = await req.json();

    try {
        await connectToDB();

        const newQuote = new Quote({
            author: userId,
            quote,
            tag,
        });
        await newQuote.save();

        return new Response(JSON.stringify(newQuote), {
            status: 201,
        })
    } catch (error) {
        return new Response("Error crating quote", {
            status: 500,
        });
    }
    
}