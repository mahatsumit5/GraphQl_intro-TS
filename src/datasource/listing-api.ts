import { RESTDataSource } from "@apollo/datasource-rest";
import { Amenity, Listing } from "../types";
export class ListingApi extends RESTDataSource {
  baseURL = "https://rt-airlock-services-listing.herokuapp.com/";

  async getFeaturedListing(): Promise<Listing[]> {
    // for each listing ID, request this.get<Amenity[]>(`listings/{id}/amenities`)
    // Then map each set of amenities back to its listing
    const listings = await this.get<Listing[]>("featured-listings");
    return listings;
  }

  getListing(listingId: string) {
    return this.get<Listing>(`listings/${listingId}`);
  }

  getAmenities(listingId: string): Promise<Amenity[]> {
    return this.get<Amenity[]>(`listings/${listingId}/amenities`);
  }
}
