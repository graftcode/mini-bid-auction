import { Request, Response } from "express";
import UserModel from "../../models/User";
import ItemModel from "../../models/Items";
import AuctionModel from "../../models/Auction";

const sellItemHandler = async (req: Request, res: Response) => {
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

      // add item to auction
      const itemPlacedInAuction = await AuctionModel.create({
        auctioned_item: itemToSell?._id,
        status: itemToSell?.status,
        date_listed: itemToSell?.date_listed,
        auction_ends,
      });

      return res.send({
        message: "Successfully posted item for sale ",
        data: {
          itemToSell,
          itemPlacedInAuction,
        },
      });
    } catch (error) {
      return res.send({ message: error });
    }
  }
};

export default sellItemHandler;
