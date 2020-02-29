import { NgModule } from '@angular/core';
import {UserReposContainer} from './user-repos.container';
import {UserReposSearchResultListComponent} from './components/user-repos-search-result-list/user-repos-search-result-list.component';
import {UserReposSearchBarComponent} from './components/user-repos-search-bar/user-repos-search-bar.component';
import {UserReposRoutingModule} from './user-repos-routing.module';
import { UserReposSearchResultItemComponent } from './components/user-repos-search-result-item/user-repos-search-result-item.component';


@NgModule({
  imports: [UserReposRoutingModule],
  declarations: [
    UserReposContainer,
    UserReposSearchBarComponent,
    UserReposSearchResultListComponent,
    UserReposSearchResultItemComponent
  ]
})
export class UserReposModule { }
