import { gql } from 'apollo-server';

export const typeDefs = gql`
type Post{
    id:ID!
    username:String!
    body:String!
    createdAt:String!
}
type User{
    id:ID!
    email:String!
    username:String!
    createdAt:String!
}
type Query{
    getPosts:[Post]
}

type Mutation{
    register(registerInput:RegisterInput):User!
}

`