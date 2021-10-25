import jwt from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";

type tokenChecker = (req: any, res: Response, next: NextFunction) => any;
export const tokenChecker: tokenChecker = async (req, res, next) => {
  const token = await req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  const hushies = process.env.JWT_HUSH;

  try {
    if (token && hushies) {
      const decoded: any = jwt.verify(token, hushies);
      req.user = decoded.user;
      next();
    }
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
