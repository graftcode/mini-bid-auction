import { Schema, model } from "mongoose";
import mongoose from "mongoose";
import { format } from "date-fns";

import { IBid } from "../interfaces/bid_interface";

export interface IAuction {
  auctioned_item: String;
  status: string;
  date_listed: string;
  auction_ends: string;
  bids: IBid[];
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
        item_id: {
          type: String,
          required: true,
        },
        bidder_id: {
          type: String,
          required: true,
        },
        bid_price: {
          type: Number,
          required: true,
        },
        createdAt: {
          type: String,
          default: format(Date.now(), "dd/MM/yyyy"),
          required: true,
        },
        auction_ends: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

export default model<IAuction>("Auction", AuctionSchema);
