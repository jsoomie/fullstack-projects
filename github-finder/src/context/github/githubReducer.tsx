import { IState, UserData, RepoData } from "../../interface";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../actions";

export const initialState: IState = {
  loading: false,
  users: [],
  repos: [],
  searchUsers: Function,
};

type Action =
  | { type: typeof SET_LOADING; payload: boolean }
  | { type: typeof SEARCH_USERS; payload: UserData[] }
  | { type: typeof CLEAR_USERS; payload: UserData[] }
  | { type: typeof GET_USER; payload: UserData[] }
  | { type: typeof GET_REPOS; payload: RepoData[] };

type GithubReducer = (
  state: typeof initialState,
  action: Action
) => typeof initialState;

export const githubReducer: GithubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
