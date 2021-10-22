//  USERS CONTROLLERS
import { Response, Request } from "express";

export const getUsers = (req: Request, res: Response) => {
  try {
    res.json({ msg: "[CONTROLLER] GET api/users/" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};

export const postUsers = (req: Request, res: Response) => {
  try {
    res.json({ msg: "[CONTROLLER] POST api/users/" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};
