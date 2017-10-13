import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Router, ActivatedRoute }            from '@angular/router';
import { EngDictionaryService } from '../eng-dictionary-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  host: {'window:beforeunload':'doSomething'}
  // directives: [FORM_DIRECTIVES]
})

export class CreateComponent implements OnInit {
  createForm: NgForm;
  message: string;
  flagSubmit: boolean = false;
  location: Location;

  constructor(
    private engDicService: EngDictionaryService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  addWordToList(src: string, res: string ): void{
    let n = 0;
    this.engDicService.getWords()
                      .then(list => n = list.length);
    let word = { id: n+1, source: src, result: res };
    this.engDicService.addWord(word);

    this.message = '[ ' + src + ' - ' + res + ' ] ' + 'successfully added!';
    this.flagSubmit = true;
  }

  ngOnInit():void {
    console.log(this.route.snapshot);
  }

  canDeactivate() {

      if ( !this.flagSubmit ) {
        return window.confirm('Есть несохраненные изменения. Удалить их?');
      }

      return true;
  }
}
