import { Schema, model } from "mongoose";
import { format } from "date-fns";
import mongoose from "mongoose";

export interface IAuction {
  auctioned_item: {
    id: string;
    seller_id: string;
    seller_username: string;
    item: string;
    description: string;
    condition: string;
    auction_ends: string;
    date_listed: string;
    status: string;
  };
  status: string;
  createdAt: string;
  auction_ends: string;
  bids: { bidder_id: string; bid_price: number; bid_date: string }[];
}

const AuctionSchema = new Schema({
  auctioned_item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Items",
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
