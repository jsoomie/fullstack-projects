//  CONTACTS CONTROLLERS
import { Response, Request } from "express";

type Controllers = (req: Request, res: Response) => void;

/**
 * @access        Private
 * @description   Gets users contacts
 * @route         GET /api/contacts
 */
export const getContacts: Controllers = (req, res) => {
  try {
    res.json({ msg: "[CONTROLLER] GET api/contacts/" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};

/**
 * @access        Private
 * @description   Creates contacts
 * @route         POST /api/contacts
 */
export const postContacts: Controllers = (req, res) => {
  try {
    res.json({ msg: "[CONTROLLER] POST api/contacts/" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};

/**
 * @access        Private
 * @description   Updates contacts
 * @route         PUT /api/contacts/:id
 */
export const updateContacts: Controllers = (req, res) => {
  try {
    res.json({ msg: "[CONTROLLER] PUT api/contacts/" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};

/**
 * @access        Private
 * @description   Deletes contacts
 * @route         DELETE /api/contacts/:id
 */
export const deleteContacts: Controllers = (req, res) => {
  try {
    res.json({ msg: "[CONTROLLER] DELETE api/contacts/" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};
