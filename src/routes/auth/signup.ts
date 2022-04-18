import { Router as expressRouter } from "express";

import UserModel from "../../models/User";
import { applyCorrectCasing } from "../../utils/applyCorrectCasing";
import { signupValidation } from "../../validation/signupValidation";

const router = expressRouter();

router.post("/signup", async (req, res) => {
  const { email, password, username, fullname } = req.body;

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    res.send({ message: "User already exists" });
    return;
  }

  const { error } = signupValidation.validate({
    email,
    password,
    username,
    fullname,
  });

  if (error) return res.send({ message: error.details[0].message });

  try {
    const newUser = await UserModel.create({
      email: email.toLowerCase(),
      password,
      username: username.toLowerCase(),
      fullname: applyCorrectCasing(fullname),
    });

    res.send({ message: "Successfully signed up", data: newUser });
  } catch (error) {
    res.send({ message: error });
  }
});

export default router;
