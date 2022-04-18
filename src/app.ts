import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";

import authRoutes from "./routes/auth";
import itemsRoutes from "./routes/items";

dotenv.config({ path: `${__dirname}/../.env` });

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", [...authRoutes]);
app.use("/api", [...itemsRoutes]);

mongoose.connect(`${process.env.DATABASE_URL}`);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
