import {Component, Input, OnInit} from '@angular/core';
import {Repository} from '../../../common/models/Repository';
import {UserReposRetrieverService} from '../../services/user-repos-retriever/user-repos-retriever.service';
import {Branch} from '../../../common/models/Branch';

@Component({
  selector: 'app-user-repos-search-result-item',
  templateUrl: './user-repos-search-result-item.component.html',
  styleUrls: ['./user-repos-search-result-item.component.sass']
})
export class UserReposSearchResultItemComponent implements OnInit {
  @Input() repo: Repository;
  branches: Branch[];
  showBranches = false;
  constructor(private userReposRetriever: UserReposRetrieverService) { }

  ngOnInit() {
  }

  onArrowClick() {
    this.loadRepoBranches();
    this.toggleShowBranches();
  }

  loadRepoBranches() {
    this.userReposRetriever.getBranches(this.repo.branches_url).subscribe(
      res => this.branches = res
    );
  }

  toggleShowBranches() {
    this.showBranches = !this.showBranches;
  }
}
