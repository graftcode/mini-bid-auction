import { Router as expressRouter } from "express";

const router = expressRouter();

router.post("/signup", (req, res) => {
  res.send("signed in");
});

export default router;
