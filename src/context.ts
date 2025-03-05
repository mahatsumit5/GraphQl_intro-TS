import { ListingApi } from "./datasource/listing-api";

export type DataSourceContext = {
  dataSources: {
    listingAPI: ListingApi;
  };
};
