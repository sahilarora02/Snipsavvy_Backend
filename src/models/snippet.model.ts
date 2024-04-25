import mongoose, { Document, Schema } from "mongoose";

interface IComment extends Document {
    user_id: string,
    text: string
}

const commentSchema = new Schema<IComment>({
    user_id: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

const snippetSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code: {
        type: String, //[FIXME] - checkout for better datatype for storing code, that keeps the indentation, spacing and formatting intact.
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    category_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    // share_id: {  // [FIX], we will be needing this in future
    //     type: String,
    //     required: true
    // },
    comments: {
        type: [commentSchema], // Array of comments
        default: []
    }
});

const Snippet = mongoose.model("Snippet", snippetSchema);
export default Snippet