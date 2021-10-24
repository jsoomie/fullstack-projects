//  USERS CONTROLLERS
import { Response, Request } from "express";
import { validationResult } from "express-validator";
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
export const postUsers: Controllers = (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("passed");
    res.json({ msg: "[CONTROLLER] POST api/users/" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};
