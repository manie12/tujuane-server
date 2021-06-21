import { UserInputError } from 'apollo-server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../Model/UserModel.js';
import { SECRET_KEY } from '../../config.js';
import { registerValidation } from '../../Utils/RegisterValidation.js';
import { loginValidation } from '../../Utils/LoginReg.js'

export const userResolvers = {
    Mutation: {
        async login(_, { username, password }) {
            const { invalid, errors } = loginValidation(username, password);
            if (invalid) {
                throw new UserInputError("validation errors", { errors })
            }
            const user = await User.findOne({ username });
            if (!user) {
                throw new UserInputError("user does not exist", {
                    errors: {
                        username: 'user does not exist'
                    }
                });
            }
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                throw new UserInputError("wrong credentials", {
                    errors: {
                        password: "wrong credentials"
                    }
                })
            }
            const token = jwt.sign({
                id: user._id,
                email: user.email,
                username: user.username
            }, SECRET_KEY, { expiresIn: '1h' });

            return {
                ...user._doc,
                username: user.username,
                id: user._id,
                token
            }

        },


        async register(_, { registerInput: { username, email, password, confirmPassword } }) {
            // const { errors, valid } = registerValidation(username, email, password, confirmPassword);
            //  if (!valid) {
            //  throw new UserInputError("validation errors", { errors })

            //  }

            const user = await User.findOne({ username });
            if (user) {
                throw new UserInputError("user already exists", {
                    errors: {
                        username: "user already exist"
                    }
                })
            }
            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                email,
                password,
                username,
                createdAt: new Date().toISOString()

            });

            const res = await newUser.save();
            const token = jwt.sign({
                id: res._id,
                email: res.email,
                username: res.username
            }, SECRET_KEY, { expiresIn: "1h" });

            return {
                ...res._doc,
                id: res._id,
                token,
                email: res.email,
                username: res.username,
                createdAt: res.createdAt
            }
        }
    }
}
