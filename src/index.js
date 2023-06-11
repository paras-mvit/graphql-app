import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// import path from "path";
import dotenv from "dotenv";
import "./utils/db.connect.js";

// CUSTOM IMPORTs
import { typeDefs, resolvers } from "./schema.js";

const PORT = process.env.PORT || 6100;

dotenv.config({
  path: `../.env.${process.env.NODE_ENV}`,
});
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const { url } = await startStandaloneServer(server, { listen: { port: PORT } });

console.log(`🚀  Server ready at: ${url}`);
