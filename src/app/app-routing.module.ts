import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WordsListComponent } from './words-list/words-list.component';
import { CreateComponent } from './create/create.component';
import { TestEngDictionaryComponent } from './test-eng-dictionary/test-eng-dictionary.component';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',  component: WordsListComponent },
  { path: 'test', component: TestEngDictionaryComponent },
  { path: 'create', component: CreateComponent, canDeactivate: [CanDeactivateGuardService]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
