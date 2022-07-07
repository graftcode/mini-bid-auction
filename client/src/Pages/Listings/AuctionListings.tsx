import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "../../axios";
import Item from "../../Components/Item/Item";
import { IItem } from "../../Components/Item/Item";

const AuctionListings: React.FC = () => {
  const [listings, setListings] = useState<IItem[] | []>([]);
  const { authToken }: { authToken: string } = useOutletContext();

  useEffect(() => {
    axios
      .get("api/items", {
        headers: { "auth-token": authToken },
      })
      .then(({ data }) => setListings(data?.data));
  }, []);

  return (
    <>
      <h1>Auction Listing Page</h1>
      {listings.map((listing) => (
        <Item key={listing._id} item={listing} />
      ))}
    </>
  );
};

export default AuctionListings;
