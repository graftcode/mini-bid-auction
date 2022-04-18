import { Schema, model } from "mongoose";

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
    default: Date.now(),
    required: true,
  },
});

export default model<IUser>("Users", UserSchema);
