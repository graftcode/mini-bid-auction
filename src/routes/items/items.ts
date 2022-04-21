import { Router as expressRouter } from "express";
import verifyToken from "../../validation/verifyToken";

const router = expressRouter();

router.get("/items", verifyToken, (req, res) => {
  console.log("res.locals: ", res.locals);
  res.send("this is the items page");
});

export default router;
