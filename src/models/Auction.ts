import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IAuction {
  auctioned_item: String;
  status: string;
  date_listed: string;
  auction_ends: string;
  bids: { bidder_id: string; bid_price: number; bid_date: string }[];
}

const AuctionSchema = new Schema({
  auctioned_item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Items",
  },
  status: {
    type: String,
    required: true,
  },
  date_listed: {
    type: String,
    required: true,
  },
  auction_ends: {
    type: String,
    required: true,
  },

  bids: {
    type: [
      {
        bidder_id: {
          type: String,
          required: true,
        },
        bid_price: {
          type: Number,
          required: true,
        },
        bid_date: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

export default model<IAuction>("Auction", AuctionSchema);
