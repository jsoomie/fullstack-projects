//  AUTH CONTROLLERS
import { Response, Request } from "express";
import { compare } from "bcryptjs";
import { User } from "../models";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

type Controllers = (req: Request, res: Response) => void;

/**
 * @access        Private
 * @description   Gets logged in user
 * @route         GET api/auth
 */
export const getAuth: Controllers = (req, res) => {
  try {
    res.json({ msg: "[CONTROLLER] GET api/auth/" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};

/**
 * @access        Public
 * @description   Auth user & get token
 * @route         POST api/auth
 */
export const postAuth: Controllers = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  type ControllerBody = { email: string; password: string };
  const { email, password }: ControllerBody = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    const hushies = process.env.JWT_HUSH;
    if (payload && hushies) {
      jwt.sign(payload, hushies, { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    }
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};
