import { Component, OnInit } from '@angular/core';
import {UserReposRetrieverService} from './services/user-repos-retriever/user-repos-retriever.service';
import {Repository} from '../common/models/Repository';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.container.html',
  styleUrls: ['./user-repos.container.sass']
})
export class UserReposContainer implements OnInit {

  constructor(private userReposRetriever: UserReposRetrieverService) { }

  ngOnInit() {
    this.userReposRetriever.getRepos('mattyeo').subscribe(res => {
      console.log(res as Repository[]);
    });
  }

}
