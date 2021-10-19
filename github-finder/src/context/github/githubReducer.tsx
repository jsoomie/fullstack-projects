import { UserData, RepoData } from "../../interface";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../actions";

export interface IState {
  users: UserData[];
  user: UserData[];
  repos: RepoData[];
  loading: boolean;
  searchUsers: Function;
  clearUser: React.MouseEventHandler;
  getUser: Function;
  getRepos: Function;
}

export const initialState: IState = {
  loading: true,
  users: [],
  user: [],
  repos: [],
  searchUsers: Function,
  clearUser: () => MouseEvent,
  getUser: Function,
  getRepos: Function,
};

type Action =
  | { type: typeof SET_LOADING }
  | { type: typeof CLEAR_USERS }
  | { type: typeof SEARCH_USERS; payload: UserData[] }
  | { type: typeof GET_USER; payload: UserData[] }
  | { type: typeof GET_REPOS; payload: RepoData[] };

type GithubReducer = (
  state: typeof initialState,
  action: Action
) => typeof initialState;

export const githubReducer: GithubReducer = (state, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
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
      throw new Error("What did you just do?");
  }
};
