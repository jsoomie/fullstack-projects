//  USERS CONTROLLERS
import { Response, Request } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import { User } from "../models";

type Controllers = (req: Request, res: Response) => void;

/**
 * @access        Public
 * @description   Gets all users
 * @route         GET api/users
 */
export const getUsers: Controllers = (req, res) => {
  try {
    res.json({ msg: "[CONTROLLER] GET api/users/" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};

/**
 * @access        Public
 * @description   Registers user
 * @route         POST api/users
 */
export const postUsers: Controllers = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  type ControllerBody = { name: string; email: string; password: string };
  const { name, email, password }: ControllerBody = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res.json({ msg: "[CONTROLLER] POST api/users/ WORKED" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};
