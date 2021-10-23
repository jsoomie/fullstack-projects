//  AUTH CONTROLLERS
import { Response, Request } from "express";

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
export const postAuth: Controllers = (req, res) => {
  try {
    res.json({ msg: "[CONTROLLER] POST api/auth/" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};
