import Joi from "joi";

export const signupValidation = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  password: Joi.string().min(6).required(),
  fullname: Joi.string().required(),
});
