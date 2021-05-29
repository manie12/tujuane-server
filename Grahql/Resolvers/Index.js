import { postResolvers } from './Post.js';

export const resolvers = {
    Query: {
        ...postResolvers.Query
    }
}