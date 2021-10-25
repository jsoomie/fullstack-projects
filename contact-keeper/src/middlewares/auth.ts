import jwt from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";

interface IUserRequest extends Request {
  user: any;
}

type tokenChecker = (req: any, res: Response, next: NextFunction) => void;
export const tokenChecker: tokenChecker = (req, res, next) => {
  const token = <string>req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  const hushies = process.env.JWT_HUSH;

  try {
    if (token && hushies) {
      const decoded = <any>jwt.verify(token, hushies);
      req.user = decoded.user;
      next();
    }
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
