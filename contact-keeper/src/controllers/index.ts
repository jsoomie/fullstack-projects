export * from "./users";
export * from "./auth";
export * from "./contacts";

interface IUserId {
  id?: number;
}

declare module "express-serve-static-core" {
  interface Request {
    user?: IUserId;
  }
}
