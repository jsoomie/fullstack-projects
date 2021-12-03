import { Actions } from "actions";

export interface IAuthState {
  user: string | null;
  dispatch: React.Dispatch<Action> | undefined;
}

export interface IChild {
  children: React.ReactNode;
}

export type Action = { type: Actions.TEST; payload: string };
