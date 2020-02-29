import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserReposContainer} from './user-repos.container';


const routes: Routes = [
  {
    path: '',
    component: UserReposContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserReposRoutingModule { }
