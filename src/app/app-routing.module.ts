import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WordsListComponent } from './words-list/words-list.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',  component: WordsListComponent },
  { path: 'create',component: CreateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
