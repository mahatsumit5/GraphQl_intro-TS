import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    featuredListings: (parent, args, { dataSources }) => {
      return dataSources.listingAPI.getFeaturedListing();
    },
    listing: (__, { id }, { dataSources }) => {
      return dataSources.listingAPI.getListing(id);
    },
  },
  Listing: {
    amenities: ({ id }, _, { dataSources }) => {
      return dataSources.listingAPI.getAmenities(id);
    },
  },
  Amenity: {},
};
