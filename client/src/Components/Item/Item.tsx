import React, { useContext } from "react";

import { Img, List, Wrapper, ListWrapper } from "./Item.styles";
import NoImage from "../../assets/NoImage.webp";
import Button from "../Button/Button";
import axios from "../../axios";
import { AuthContext } from "../../Contexts/AuthContext";

export interface IItem {
  item: string;
  condition: string;
  date_listed: string;
  auction_ends: string;
  description: string;
  seller_username: string;
  status: string;
  imageURL?: string;
  __v?: number;
  _id?: string;
}

const Item: React.FC<{ item: IItem }> = ({ item }) => {
  const { authToken } = useContext<any>(AuthContext);

  console.log({
    item: item.item,
    id: item._id,
  });

  const handleInterest = () => {
    axios({
      method: "post",
      url: "api/item/bid",
      data: {
        item_id: item._id,
        bidder_id: "626c656b865e729e114e18da",
        bid_price: "10",
      },
      headers: {
        "auth-token": authToken,
      },
    });
  };
  return (
    <Wrapper>
      <Img
        src={item.item} //placeholder val until image is available in response. For now fallback provided in onError
        onError={(e: any) => {
          e.target.onerror = null;
          e.target.src = NoImage;
        }}
        alt="image here"
      />
      <div>
        <ListWrapper>
          <List>Item: {item.item}</List>
          <List>Condition: {item.condition}</List>
          <List>Description: {item.description}</List>
          <List>Date listed: {item.date_listed}</List>
          <List>Bidding ends: {item.auction_ends}</List>
          <List>Seller name: {item.seller_username}</List>
          <List>status: {item.status}</List>
        </ListWrapper>
        <Button onClick={handleInterest}>Place bid</Button>
      </div>
    </Wrapper>
  );
};

export default Item;
