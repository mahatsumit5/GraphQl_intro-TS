import { RESTDataSource } from "@apollo/datasource-rest";
export class ListingApi extends RESTDataSource {
  baseURL = "https://rt-airlock-services-listing.herokuapp.com/";

  getFeaturedListing() {
    return this.get<any[]>("featured-listings");
  }
}
