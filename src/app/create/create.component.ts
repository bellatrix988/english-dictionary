import { Component, OnInit, OnDestroy, Input, Output,  EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EngDictionaryService } from '../eng-dictionary-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
  // host: { 'window:beforeunload': 'doSomething' }
})

export class CreateComponent implements OnInit {
  message: string;
  flagSubmit: boolean;
  location: Location;
  src: string;
  res: string;

  constructor(
    private engDicService: EngDictionaryService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  addWordToList(src: string, res: string ): void {
    let n = 0;
    this.engDicService.getWords()
                      .then(list => n = list.length);
    const word = { id: n + 1, source: src, result: res };
    this.engDicService.addWord(word);

    this.message = '[ ' + src + ' - ' + res + ' ] ' + 'successfully added!';
    this.flagSubmit = true;
  }

  ngOnInit(): void {
    this.src = '';
    this.res = '';
  }

  canDeactivate() {

      if ( (this.src === undefined || this.res === undefined) || !this.flagSubmit && (this.src.length !== 0  || this.res.length !== 0 ) ) {
        return window.confirm('Есть несохраненные изменения. Удалить их?');
      }

      return true;
  }
}
