import { Component, OnInit } from '@angular/core';

import { EngDictionaryService } from '../eng-dictionary-service.service';
import { EngDictionary } from '../eng-dictionary';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.css']
})
export class WordsListComponent implements OnInit {
  listOfWords: EngDictionary[];

  constructor(
    private engDicService: EngDictionaryService) { }

  getWords(): void {
    this.engDicService
    .getWords()
    .then(listOfWords => this.listOfWords = listOfWords);
  }

  removeWord(word: EngDictionary): void{
    this.engDicService
        .deleteWords(word);
    this.getWords();
  }
  ngOnInit(): void {
    this.getWords();
  }

}
