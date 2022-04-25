import { Router, Request, Response } from "express";
import UserModel from "../../models/User";
import ItemModel from "../../models/Items";
import verifyToken from "../../validation/verifyToken";

const router = Router();

router.post("/sell-item", verifyToken, async (req: Request, res: Response) => {
  const { _id } = res.locals;
  const { item, description, condition } = req.body;

  const user = await UserModel.findOne({
    _id,
  });

  console.log("User: ", user);
  if (!user) return res.send({ message: "Could not find acccount" });

  if (item && description && condition) {
    try {
      const itemToSell = await ItemModel.create({
        seller_id: user._id,
        item,
        description,
        condition,
      });

      return res.send({ message: "posted for sale successfully", itemToSell });
    } catch (error) {
      return res.send({ message: error });
    }
  }

  res.send("this is the sell item page");
});

export default router;
