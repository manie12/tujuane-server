import gql from 'graphql-tag';

export const typeDefs = gql`
type Post{
    id:ID!
    username:String!
    body:String!
    createdAt:String!
    comments:[Comments]!
    likes:[Likes]!
    likeCount:Int!
    commentCount:Int!
    
}
type Likes{
    id:ID!
    username:String!
    createdAt:String!
}
type  Comments{
    id:ID!
    username:String!
    createdAt:String!
    body:String!
}
type User{
    id:ID!
    email:String!
    username:String!
    createdAt:String!
    token:String!
}
input RegisterInput{
    username:String!
    password:String!
    confirmPassword:String!
    email:String!

}



type Query{
    getPosts:[Post]!
    getPost(postId:ID!):Post!
}

type Mutation{
    register(registerInput:RegisterInput):User!
    login(username:String!,password:String!):User!
    createPost(body:String!):Post!
    deletePost(postId:ID!):String!
    createComment(postId:ID!,body:String!):Post!
    deleteComment(postId:ID!,commentID:ID!):Post!
    likePost(postId:ID!):Post!
}



 
`