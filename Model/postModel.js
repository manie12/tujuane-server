import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    body: String,
    username: String,
    createdAt: String,
    comments: [
        {
            body: String,
            createdAt: String,
            username: String
        }
    ],
    likes: [
        {
            username: String,
            createdAt: String
        }
    ]

});

const postModel = mongoose.model("Post", postSchema);

export default postModel;