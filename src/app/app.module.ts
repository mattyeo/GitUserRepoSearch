import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserReposContainer } from './user-repos/user-repos.container';
import { UserReposSearchBarComponent } from './user-repos/components/user-repos-search-bar/user-repos-search-bar.component';
import { UserReposSearchResultListComponent } from './user-repos/components/user-repos-search-result-list/user-repos-search-result-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserReposContainer,
    UserReposSearchBarComponent,
    UserReposSearchResultListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
