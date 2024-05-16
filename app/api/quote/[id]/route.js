import { connectToDB } from "@/utils/database";
import Quote from "@/models/quote";

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        
        const quote = await Quote.findById(params.id).populate("author");

        if (!quote) {
            return new Response('Quote not found', {
                status: 404,
            });
        }

        return new Response(JSON.stringify(quote), {
            status: 200
        })

    } catch (error) {
        return new Response('failed to fetch prompt', {
            status: 500
        })
    }
}

export const PATCH = async (req, { params }) => {
    const { quote, tag } = await req.json();

    try {
        await connectToDB();

        const existingQuote = await Quote.findById(params.id);

        if (!existingQuote) {
            return new Response('Quote not found', {
                status: 404,
            });
        }

        existingQuote.quote = quote;
        existingQuote.tag = tag;

        await existingQuote.save();

        return new Response(JSON.stringify(existingQuote), {
            status: 200
        });

    } catch (error) {
        return new Response('failed to update prompt', {
            status: 500
        });
    }
}

export const DELETE = async (req, { params }) => {
    try {
        await connectToDB();

        const quote = await Quote.findByIdAndDelete(params.id);

        if (!quote) {
            return new Response('Quote not found', {
                status: 404,
            });
        }

        return new Response('Quote deleted', {
            status: 200
        });

    } catch (error) {
        return new Response('failed to delete prompt', {
            status: 500
        });
    }
}