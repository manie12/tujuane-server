import { gql } from 'apollo-server';

export const typeDefs = gql`
type Post{
    id:ID!
    username:String!
    body:String!
    createdAt:String!
    comments:[Comments]!
    likes:[Likes]
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
    getPosts:[Post]
}

type Mutation{
    register(registerInput:RegisterInput):User!
    login(username:String!,password:String!):User!
    createPost(body:String!):Post!
    deletePost(postId:ID!):String!
    createComment(postId:ID!,commentId:ID!):Post!
}

`