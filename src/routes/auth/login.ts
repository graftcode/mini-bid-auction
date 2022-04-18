import { Router as expressRouter } from "express";
import { compare } from "bcryptjs";
import User from "../../models/User";

import { IUser } from "../../models/User";
import { loginValidation } from "../../validation/loginValidation";

const router = expressRouter();

interface IrequestBody {
  email: string;
  password: string;
}

router.post("/login", async (req, res) => {
  const { email, password }: IrequestBody = req.body;

  const user: IUser | null = await User.findOne({
    email,
  });

  const { error } = loginValidation.validate({
    email,
    password,
  });

  if (error) return res.send({ message: error.details[0].message });

  if (!user) {
    return res.send({
      message:
        "Sorry, either you have entered wrong information or we cannot find acount",
    });
  }

  const passwordIsMatch = await compare(password, user.password);

  if (passwordIsMatch) {
    return res.send({
      message: "Successfully logged in",
    });
  }
});

export default router;
