import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Repository} from '../../../common/models/Repository';
import {API_GIT_REPOSITORY_ENDING, API_GIT_USER_URL} from '../user-repos.config';
import {map} from 'rxjs/operators';
import {Branch} from '../../../common/models/Branch';
import {CacheRetriever} from '../../../common/abstracts/cache-retriever.abstract';

@Injectable()
export class UserReposRetrieverService extends CacheRetriever<null, Repository[] | Branch[]> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  getRepos(username: string): Observable<Repository[]> {
    return this.doRequest(API_GIT_USER_URL + username + API_GIT_REPOSITORY_ENDING)
      .pipe(
        map( (res: Repository[]) => {
          return res.map(repoItem => {
            return {
              name: repoItem.name,
              owner: {
                login: repoItem.owner.login
              },
              fork: repoItem.fork,
              branches_url: this.cleanBranchURL(repoItem.branches_url)
            };
          });
      }));
  }

  getBranches(branchesURL: string): Observable<Branch[]> {
    return this.doRequest(branchesURL)
      .pipe( map( (res: Branch[]) => {
        return res.map(repoBranch => {
          return {
            name: repoBranch.name,
            commit: {
              sha: repoBranch.commit.sha,
              url: repoBranch.commit.sha
            }
          };
        });
      }));
  }

  cleanBranchURL(url: string): string {
    return url.replace('{/branch}', '');
  }
}
