import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { EngDictionaryService } from './eng-dictionary-service.service';
import { CreateComponent } from './create/create.component';
import { WordsListComponent } from './words-list/words-list.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    WordsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [EngDictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
