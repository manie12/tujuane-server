import { AuthenticationError, UserInputError } from 'apollo-server';
import Post from '../../Model/postModel.js';
import { checkAuth } from '../../Utils/checkAuth.js';

export const commentResolvers = {
    Mutation: {
        async createComment(_, { postId, body }, context) {
            const user = checkAuth(context);

            const post = await Post.findById(postId);
            if (post) {
                post.comments.unshift({

                    body,
                    username: user.username,
                    createdAt: new Date().toISOString()
                });
                await post.save();
                return post;

            } else {
                throw new Error("post not found")
            }

        },
        async deleteComment(_, { postId, commentID }, context) {
            const user = checkAuth(context);
            const post = await Post.findById(postId);
            if (post) {
                const commentIndex = await post.comments.findIndex(c => c.id === commentID)
                if (post.comments[commentIndex].username === user.username) {
                    post.comments.splice(commentIndex, 1)
                    post.save();
                    return post;
                } else {
                    throw new AuthenticationError("action  not allowed")
                }
            } else {
                throw new UserInputError("post not found")
            }

        },
        async likePost(_, { postId }, context) {
            const user = checkAuth(context);
            const post = await Post.findById(postId);
            if (post) {
                if (post.likes.find(l => l.username === user.username)) {
                    post.likes = post.likes.filter(like => like.username !== user.username)
                } else {
                    post.likes.push({
                        username: user.username,
                        createdAt: new Date().toISOString()
                    })
                }
                post.save();
                return post;
            } else {
                throw new Error("post does not exist")
            }
        }

    }
}