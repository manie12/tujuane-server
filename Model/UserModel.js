import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    createdAt: String,



});

const userModel = model("User", userSchema);

export default userModel;