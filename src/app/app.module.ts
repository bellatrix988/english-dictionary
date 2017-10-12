import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder }    from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { EngDictionaryService } from './eng-dictionary-service.service';
import { CreateComponent } from './create/create.component';
import { WordsListComponent } from './words-list/words-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BlackListDirective } from './black-list.directive';
import { TestEngDictionaryComponent } from './test-eng-dictionary/test-eng-dictionary.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    WordsListComponent,
    BlackListDirective,
    TestEngDictionaryComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [EngDictionaryService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
