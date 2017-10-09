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

  addWord(): EngDictionary{
    //TODO
    return;
  }

}
