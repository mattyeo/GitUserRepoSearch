import { Component, OnInit } from '@angular/core';
import {UserReposRetrieverService} from './services/user-repos-retriever/user-repos-retriever.service';
import {Repository} from '../common/models/Repository';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.container.html',
  styleUrls: ['./user-repos.container.sass']
})
export class UserReposContainer implements OnInit {
  repos: Observable<Repository[]>;
  constructor( public userReposRetriever: UserReposRetrieverService) { }

  ngOnInit() {
  }

  searchRepos(username: string): void {
    this.repos = this.userReposRetriever.getRepos(username);
  }

}
