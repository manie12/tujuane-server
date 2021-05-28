import { ApolloServer } from "apollo-server";
import { gql } from "graphql-tag";

const typeDefs = `
type Post{
    id:ID!
    username:String!
    body:String!
    createdAt:String!
}
type Query{
getPosts:[Post]

}

`