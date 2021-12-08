import { Actions } from "actions";
import { DocumentData } from "@firebase/firestore";

// Auth Context
export interface IAuthState {
  user: IUser | null;
  dispatch: React.Dispatch<Action> | undefined;
  authIsReady: boolean;
}

// Children prop
export interface IChild {
  children: React.ReactNode;
}

// HOOKS
export interface IHook<T> {
  (): T;
}

export interface IErrorPending {
  error: Error;
  isPending: boolean;
}

// Sign Up
export interface IUseSignup extends IErrorPending {
  signup: ISignup;
}

export interface ISignup {
  (email: string, password: string, displayName: string): void;
}

// Login
export interface IUseLogin extends IErrorPending {
  login: ILogin;
}
export interface ILogin {
  (email: string, password: string): void;
}

// Logout
export interface IUseLogout extends IErrorPending {
  logout: () => Promise<void>;
}

export type Error = string | null;

// // Firebase
export interface IUser extends ITransactionProps {
  displayName: string | null;
  email: string | null;
}

// firestore document
export interface Document extends DocumentData {
  id: string;
  name: string;
  amount: string;
}

// Auth Reducer
export type Action =
  | { type: Actions.LOGIN; payload: IUser | null }
  | { type: Actions.LOGOUT }
  | { type: Actions.AUTH_READY; payload: IUser | null };

// Homp > Transaction Component
export interface ITransactionProps {
  uid: string | null;
}
