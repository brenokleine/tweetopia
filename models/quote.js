import { Schema, model, models } from "mongoose";

const QuoteSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    quote: {
        type: String,
        required: [true, "Quote is required"],
    },
    tag: {
        type: String,
        required: false,
    },
    creationDate: {
        type: Date,
    },
    
});

const Quote = models.Quote || model("Quote", QuoteSchema);

export default Quote;