import { Schema, model } from "mongoose";

interface IUser {
  email: number;
  username: string;
  password: string;
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
});

export default model<IUser>("Users", UserSchema);
