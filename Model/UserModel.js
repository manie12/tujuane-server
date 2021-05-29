import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    createdAt: String,



});

const userModel = mongoose.model("User", userSchema);

export default userModel;