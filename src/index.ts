import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { gql } from "graphql-tag";
import { resolve } from "path";

const typeDefs = gql(
  readFileSync(resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
  })
);

async function startApolloServer() {
  const { url } = await startStandaloneServer(new ApolloServer({ typeDefs }));
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}
startApolloServer();
