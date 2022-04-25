import { Schema, model } from "mongoose";
import { format } from "date-fns";

export interface IUser {
  id: string;
  seller_id: string;
  item: string;
  description: string;
  condition: string;
  status: string;
  createdAt: string;
}

const ItemSchema = new Schema({
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
    type: String,
    required: true,
  },
  date_listed: {
    type: String,
    default: format(Date.now(), "dd/MM/yyyy"),
    required: true,
  },
  status: {
    type: String,
    default: "Open",
  },
});

export default model<IUser>("Items", ItemSchema);
