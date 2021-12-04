import { Actions } from "actions";

export interface IAuthState {
  user: IUser | null;
  dispatch: React.Dispatch<Action> | undefined;
}

export interface IChild {
  children: React.ReactNode;
}

export interface IUser {
  displayName: string | null;
  email: string | null;
}

export type Action = { type: Actions.LOGIN; payload: IUser | null };
