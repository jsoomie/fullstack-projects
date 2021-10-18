import { UserData, RepoData } from "./index";

export interface IState {
  users: UserData[];
  repos: RepoData[];
  loading: boolean;
  searchUsers: Function;
}

export interface ChildProps {
  children?: JSX.Element;
}
