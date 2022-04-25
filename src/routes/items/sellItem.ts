import { Router, Request, Response } from "express";
import UserModel from "../../models/User";
import ItemModel from "../../models/Items";
import verifyToken from "../../validation/verifyToken";

const router = Router();

router.post("/sell-item", verifyToken, async (req: Request, res: Response) => {
  const { _id } = res.locals;
  const { item, description, condition, auction_ends } = req.body;

  const user = await UserModel.findOne({
    _id,
  });

  if (!user)
    return res.status(401).send({ message: "Could not find acccount" });

  if (item && description && condition && auction_ends) {
    try {
      const itemToSell = await ItemModel.create({
        seller_id: user._id,
        seller_username: user.username,
        item,
        description,
        condition,
        auction_ends,
      });

      return res.send({
        message: "Successfully posted item for sale ",
        data: itemToSell,
      });
    } catch (error) {
      return res.send({ message: error });
    }
  }
});

export default router;
