import { Schema, model } from "mongoose";
import { format } from "date-fns";

export interface IUser {
  _id?: string;
  email: string;
  username: string;
  password: string;
  fullname: string;
  date_created?: string;
}

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    min: 6,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    default: format(Date.now(), "dd/MM/yyyy"),
    required: true,
  },
});

export default model<IUser>("Users", UserSchema);
