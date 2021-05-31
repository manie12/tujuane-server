import { AuthenticationError } from 'apollo-server';
import Posts from '../../Model/postModel.js';
import { checkAuth } from '../../Utils/checkAuth.js'

export const postResolvers = {
    Query: {
        async getPosts() {
            try {
                const posts = await Post.find();
                return posts

            } catch (error) {
                throw new Error(error);
            }

        }
    },
    Mutation: {
        async createPost(_, { body }, context) {
            const user = checkAuth(context);

            const newPost = new Post({
                body,
                username: user.username,
                createdAt: new Date().toISOString()

            });
            const post = await newPost.save();
            return post;
        }

    },
    async deletePost(_, { postId }, context) {
        const user = checkAuth(context);
        try {
            const post = await Posts.findById(postId);
            console.log(post)
            if (user.username === post.username) {
                await post.delete();
                return "Post deleted successfully"
            } else {
                throw new AuthenticationError("you cannot delete")
            }

        } catch (error) {
            throw new Error("delete failed")
        }
    }
}
