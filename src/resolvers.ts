import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    featuredListings: (parent, args, { dataSources }) => {
      return dataSources.listingAPI.getFeaturedListing();
    },
  },
};
