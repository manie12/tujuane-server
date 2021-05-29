import Post from '../../Model/postModel.js';

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
    }

}