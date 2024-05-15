import { connectToDB } from "@/utils/database";
import User from "@/models/user";

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        console.log("Connected to database");

        const user = await User.findById(params.id);
        
        if (!user) {
            return new Response('User not found', {
                status: 404,
            });
        }

        return new Response(JSON.stringify(user), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error("Error fetching user:", error);
        return new Response('Failed to fetch user', {
            status: 500,
        });
    }
}