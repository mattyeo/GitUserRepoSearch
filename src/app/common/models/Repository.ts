export interface Repository {
  name: string;
  owner: {
    login: string
  };
  fork: boolean;
  branches_url: string;
}
