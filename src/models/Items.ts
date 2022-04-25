import { Schema, model } from "mongoose";

export interface IUser {
  id: string;
  seller_id: string;
  item: string;
  description: string;
  condition: string;
  status: string;
  createdAt: string;
}

const ItemSchema = new Schema(
  {
    seller_id: {
      type: String,
      required: true,
    },
    item: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    auction_ends: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      default: "Open",
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

export default model<IUser>("Items", ItemSchema);
