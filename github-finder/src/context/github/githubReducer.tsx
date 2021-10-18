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
  repos: RepoData[];
  loading: boolean;
  searchUsers: Function;
  clearUser: React.MouseEventHandler;
}

export const initialState: IState = {
  loading: false,
  users: [],
  repos: [],
  searchUsers: Function,
  clearUser: () => MouseEvent,
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
      return state;
  }
};
