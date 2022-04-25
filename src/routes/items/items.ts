import { Router, Request, Response } from "express";
import verifyToken from "../../validation/verifyToken";

import ItemModel from "../../models/Items";

const router = Router();

router.get("/items", verifyToken, async (req: Request, res: Response) => {
  try {
    const itemsForSale = await ItemModel.find({
      status: "Open",
    })
      .where("seller_id")
      .ne(res.locals._id); //ensures we don't get back items we placed on platform

    if (itemsForSale) {
      return res.send({
        message: "Items stil up for sale",
        data: itemsForSale,
      });
    }
  } catch (error) {
    return res.send({ message: error });
  }
});

export default router;
