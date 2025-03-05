import { validateFullAmenities } from "./helpers";
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
    amenities: ({ id, amenities }, _, { dataSources }) => {
      return validateFullAmenities(amenities)
        ? amenities
        : dataSources.listingAPI.getAmenities(id);
    },
  },
  Amenity: {},
  Mutation: {
    createListing: async (parent, { input }, { dataSources }) => {
      try {
        const data = await dataSources.listingAPI.createListing(input);

        return {
          code: 200,
          success: true,
          message: "Listing successfully created!",
          listing: data, // We don't have this value yet
        };
      } catch (error) {
        return {
          code: 500,
          success: false,
          message: `Something went wrong: ${error.extensions.response.body}`,
          listing: null,
        };
      }
    },
  },
};
