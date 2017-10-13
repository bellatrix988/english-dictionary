import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { EngDictionary } from './eng-dictionary';
import { DATA_DICTIONARY } from './data-dictionary';

@Injectable()
export class EngDictionaryService {

  constructor() { }

  getWords(): Promise<EngDictionary[]>{
    return Promise.resolve(DATA_DICTIONARY);
  }

  getWordById(id: number): Promise<EngDictionary>{
    return this.getWords()
               .then(listOfWords => listOfWords.find(word => word.id === id));
  }

  deleteWords(word: EngDictionary): void {
    this.getWords()
        .then(self => self.splice(self.findIndex(w => w.id === word.id),1));
  }

  addWord(word: EngDictionary): void{
    this.getWords()
        .then(listWords => listWords.push(word));
  }
}
