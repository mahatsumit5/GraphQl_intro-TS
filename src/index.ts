import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { gql } from "graphql-tag";
import { resolve } from "path";
import { resolvers } from "./resolvers";
import { ListingApi } from "./datasource/listing-api";
const PORT: number = 8080;
const typeDefs = gql(
  readFileSync(resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
  })
);

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  const context = async () => {
    const { cache } = server;
    return {
      dataSources: {
        listingAPI: new ListingApi({ cache }),
      },
    };
  };

  const { url } = await startStandaloneServer(server, {
    context,
    listen: { port: PORT },
  });
  console.log(` 🚀  Server is running! 📭  Query at ${url} `);
}
startApolloServer();
