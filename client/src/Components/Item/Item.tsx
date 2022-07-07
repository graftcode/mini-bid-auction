import React from "react";

import { Img, List, Wrapper, ListWrapper } from "./Item.styles";
import NoImage from "../../assets/NoImage.webp";

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
      </div>
    </Wrapper>
  );
};

export default Item;
