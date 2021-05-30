import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { MONGODB } from './config.js';
import { typeDefs } from './Grahql/TypeDefs.js';
import { resolvers } from './Grahql/Resolvers/index.js'


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});

mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
    return server.listen({ port: 5000 });
}).then((res) => {
    console.log(`server running on port${res.url}`);
});

