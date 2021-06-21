import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { MONGODB } from './config.js';
import { typeDefs } from './Grahql/TypeDefs.js';
import { resolvers } from './Grahql/Resolvers/Index';


const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,

    playground: true,
    context: ({ req }) => ({ req }),


});
const PORT = process.env.PORT || 5000
mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
    return server.listen({ port: PORT });
}).then((res) => {
    console.log(`server running on port${res.url}`);
});

