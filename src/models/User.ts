import { Schema, model } from "mongoose";

interface IUser {
  email: number;
  username: string;
  password: string;
}

const UserSchema = new Schema({
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    min: 6,
  },
});

export default model<IUser>("Users", UserSchema);
