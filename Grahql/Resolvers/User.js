import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../Model/UserModel.js';
import { SECRET_KEY } from '../../config.js'
export const userResolvers = {
    Mutation: {
        async register(_, { registerInput: { username, email, password, confirmPassword }, context, info }) {

            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                email,
                password,
                createdAt,
                username
            });

            const res = await newUser.save();
            const token = jwt.sign({
                id: res._id,
                email: res._email,
                username: res._username
            }, SECRET_KEY, { expiresIn: "1h" }),

            return {
                ...res._doc,
                id: res._id,
                token
            }
        }
    }
}
