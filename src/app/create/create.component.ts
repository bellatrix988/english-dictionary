import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { EngDictionaryService } from '../eng-dictionary-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private engDicService: EngDictionaryService,
    fb: FormBuilder) {
      this.createForm = fb.group({
      'src' : [null, Validators.required, Validators.pattern("[a-zA-Z][a-z]+")],
      'res': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    })
  }

  addWordToList(src: string, res: string ): void{
    let word = { id: 8, source: src, result: res };
    this.engDicService.addWord(word);
  }

  ngOnInit():void {

  }

}
