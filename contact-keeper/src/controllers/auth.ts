//  AUTH CONTROLLERS
import { Response, Request } from "express";

export const getAuth = (req: Request, res: Response) => {
  try {
    res.json({ msg: "[CONTROLLER] GET api/auth/" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};

export const postAuth = (req: Request, res: Response) => {
  try {
    res.json({ msg: "[CONTROLLER] POST api/auth/" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};
