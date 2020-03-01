import {Component, Input, OnInit} from '@angular/core';
import {Repository} from '../../../common/models/Repository';

@Component({
  selector: 'app-user-repos-search-result-list',
  templateUrl: './user-repos-search-result-list.component.html',
  styleUrls: ['./user-repos-search-result-list.component.sass']
})
export class UserReposSearchResultListComponent implements OnInit {
  @Input() repos: Repository[];
  constructor() { }

  ngOnInit() {
  }

}
