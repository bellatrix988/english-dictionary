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

  deleteWords(): void {
    //TODO
  }

  addWord(word: EngDictionary): void{
    this.getWords()
        .then(listWords => listWords.push(word));
    // return;
  }

}
