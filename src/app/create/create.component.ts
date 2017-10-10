import { Component, OnInit } from '@angular/core';

// import { EngDictionary } from '../eng-dictionary';
import { EngDictionaryService } from '../eng-dictionary-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private engDicService: EngDictionaryService) { }

  addWordToList(src: string, res: string ): void{
    let word = { id: 8, source: src, result: res };
    this.engDicService.addWord(word);
  }

  ngOnInit() {
  }

}
