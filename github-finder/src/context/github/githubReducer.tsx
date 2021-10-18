import { IState, UserData } from "../../interface";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../actions";

type Action = { type: typeof SET_LOADING; payload: UserData[] };

export const githubReducer = (state: IState, action: Action) => {
  console.log(state);
  return state;
};