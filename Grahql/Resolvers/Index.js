import { postResolvers, } from './Post.js';
import { userResolvers } from './User.js';
import { commentResolvers } from './comments.js';

export const resolvers = {
    Post: {
        likeCount: parent => parent.likes.length,
        commentCount: parent => parent.comments.length
    },
    Query: {
        ...postResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...postResolvers.Mutation,
        ...commentResolvers.Mutation
    }
}
