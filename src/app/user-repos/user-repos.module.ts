import { NgModule } from '@angular/core';
import {UserReposContainer} from './user-repos.container';
import {UserReposSearchResultListComponent} from './components/user-repos-search-result-list/user-repos-search-result-list.component';
import {UserReposSearchBarComponent} from './components/user-repos-search-bar/user-repos-search-bar.component';
import {UserReposRetrieverService} from './services/user-repos-retriever/user-repos-retriever.service';
import {UserReposRoutingModule} from './user-repos-routing.module';
import {UserReposSearchResultItemComponent} from './components/user-repos-search-result-item/user-repos-search-result-item.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [UserReposRoutingModule, HttpClientModule, CommonModule, ReactiveFormsModule],
  declarations: [
    UserReposContainer,
    UserReposSearchBarComponent,
    UserReposSearchResultListComponent,
    UserReposSearchResultItemComponent
  ],
  providers: [UserReposRetrieverService]
})
export class UserReposModule { }
