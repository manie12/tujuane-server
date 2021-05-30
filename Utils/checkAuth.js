import { AuthenticationError } from 'apollo-server';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config.js';

export const checkAuth = (context) => {
    const authHeaders = context.req.headers.authorization;
    if (authHeaders) {
        const token = authHeaders.split("Bearer ")[1];
        if (token) {
            try {
                const user = jwt.verify(token, SECRET_KEY);
                return user;
            } catch (error) {
                throw new AuthenticationError("invalid token/expired");
            }
        } throw new Error("authentication must be Bearer and token");
    } throw new Error("authorization header must be provided");
}