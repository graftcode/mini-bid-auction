import { Request, Response } from "express";

import UserModel from "../../models/User";
import ItemsModel from "../../models/Items";
import { IBid } from "../../interfaces/bid_interface";
import AuctionModel from "../../models/Auction";

const bidRoute = async (req: Request, res: Response) => {
  const { _id: userId } = res.locals;
  const { item_id, bidder_id, bid_price } = req.body;

  try {
    const user = await UserModel.findOne({
      _id: userId,
    });

    if (user) {
      if (user?._id === user._id?.valueOf()) {
        return res.send({ message: "Cannot bid for your own item" });
      }
    }

    // can be cleaner
    if (item_id && bidder_id && bid_price) {
      const item = await ItemsModel.findById(item_id);

      if (item?._id.valueOf() !== item_id) {
        return res.send({ message: "Item not found" });
      }

      const bidInformation: IBid = {
        ...req.body,
        auction_ends: item?.auction_ends,
      };

      //consider adding logic to accept bids that are only higher than last bid in bids array

      AuctionModel.findOneAndUpdate(
        {
          auctioned_item: item_id,
        },
        { $push: { bids: bidInformation } }
      ).then((obj) =>
        res.send({
          message: "Your bid has been placed successfully.",
        })
      );
      return;
    } else {
      return res.send({ message: "Please make sure you provide all fields." });
    }
  } catch (error) {
    return res.send({ message: error });
  }
};

export default bidRoute;
