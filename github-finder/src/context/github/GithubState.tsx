import { useReducer } from "react";
import axios from "axios";
import { githubContext } from "./githubContext";
import { githubReducer, initialState } from "./githubReducer";
import { ChildProps, UserData } from "../../interface";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../actions";

export const GithubState = ({ children }: ChildProps): JSX.Element => {
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const GITHUB_ID = `client_id=${process.env.REACT_APP_GITHUB_ID}`;
  const GITHUB_SECRET = `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`;
  const CREDENTIALS = `${GITHUB_ID}${GITHUB_SECRET}`;

  const setLoading = (): void => dispatch({ type: SET_LOADING });
  const clearUser = (): void => dispatch({ type: CLEAR_USERS });

  const searchUsers = async (text: string): Promise<boolean> => {
    setLoading();
    try {
      clearUser();
      const url = `https://api.github.com/search/users?q=${text}&${CREDENTIALS}`;
      const res = await axios.get<{ items: UserData[] }>(url);
      dispatch({ type: SEARCH_USERS, payload: res.data.items });
      if (res.status === 200) return !state.loading;
      else return true;
    } catch (error) {
      console.log(error);
      return true;
    }
  };

  const getUser = async (username: string): Promise<boolean> => {
    setLoading();
    try {
      const url = `https://api.github.com/users/${username}?${CREDENTIALS}`;
      const res = await axios.get(url);
      dispatch({ type: GET_USER, payload: res.data });
      if (res.status === 200) return !state.loading;
      else return true;
    } catch (error) {
      console.log(error);
      return true;
    }
  };

  const getRepos = async (username: string): Promise<boolean> => {
    setLoading();
    try {
      const url = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&${CREDENTIALS}`;
      const res = await axios.get(url);
      dispatch({ type: GET_REPOS, payload: res.data });
      if (res.status === 200) return !state.loading;
      else return true;
    } catch (error) {
      console.log(error);
      return true;
    }
  };

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUser,
        getUser,
        getRepos,
      }}
    >
      {children}
    </githubContext.Provider>
  );
};
