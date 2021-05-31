import Post from '../../Model/postModel.js';
import { checkAuth } from '../../Utils/checkAuth';

export const commentResolvers = {
    Mutation: {
        async createComment(_, { postId, commentId }, context) {
            const user = checkAuth(context);

            const post = await Post.findById(postId);
            if (post) {
                await new post({


                });

            }

        }
    }
}