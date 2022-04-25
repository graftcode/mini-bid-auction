import { Request, Response, NextFunction } from "express";
import { verify, JwtPayload } from "jsonwebtoken";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.header("auth-token") as string;
  const secret = process.env.TOKEN_SECRET as string;

  if (!authToken) return res.status(401).send({ message: "Access denied." });

  try {
    const { _id }: JwtPayload["_id"] = verify(authToken, secret);
    res.locals = { _id };
    console.log("verifyToken here")
    next();
  } catch (error) {
    return res.status(401).send({ message: "Invalid token" });
  }
};

export default verifyToken;
