import { UserData, RepoData } from "./index";

export interface IState {
  users: UserData[];
  repos: RepoData[];
  loading: boolean;
}
