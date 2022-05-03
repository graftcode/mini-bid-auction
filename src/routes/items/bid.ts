import { Router, Request, Response } from "express";
import verifyToken from "../../validation/verifyToken";

import UserModel from "../../models/User";

const router = Router();

router.post("/item/bid", verifyToken, async (req: Request, res: Response) => {
  const { _id: userId } = res.locals;

  try {
    const user = await UserModel.findOne({
      _id: userId,
    });

    if (user) {
      if (user?._id === user._id?.valueOf()) {
        return res.send({ message: "Cannot bid for your own item" });
      }
    }
  } catch (error) {
    return res.send({ message: error });
  }
});

export default router;
