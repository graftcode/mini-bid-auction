import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

interface IListing {
  item: string;
  condition: string;
  date_listed: string;
  auction_ends: string;
  description: string;
  seller_username: string;
  status: string;
}

const AuctionListings: React.FC = (props) => {
  const [listings, setListings] = useState<IListing[] | []>([]);
  const { authToken }: { authToken: string } = useOutletContext();

  useEffect(() => {
    axios
      .get("http://localhost:4500/api/items", {
        headers: { "auth-token": authToken },
      })
      .then(({ data }) => setListings(data?.data));
  }, []);

  return (
    <>
      <h1>Auction Listing Page</h1>
      {listings.map((listing, index) => (
        <div key={index}>
          <p>{listing.item}</p>
          <p>{listing.condition}</p>
          <p>{listing.date_listed}</p>
          <p>{listing.condition}</p>
          <p>{listing.auction_ends}</p>
          <p>{listing.description}</p>
          <p>{listing.seller_username}</p>
          <p>{listing.status}</p>
        </div>
      ))}
    </>
  );
};

export default AuctionListings;
