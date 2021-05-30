import { postResolvers, } from './Post.js';
import { userResolvers } from './User.js';

export const resolvers = {
    Query: {
        ...postResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...postResolvers.Mutation
    }
}
