import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Router }            from '@angular/router';
import { EngDictionaryService } from '../eng-dictionary-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  host: {'window:beforeunload':'doSomething'}
  // directives: [FORM_DIRECTIVES]
})

export class CreateComponent implements OnDestroy {
  createForm: FormGroup;
  message: string;
  flagSubmit: boolean = false;
  location: Location;

  constructor(
    private engDicService: EngDictionaryService,
    private router: Router
    ) {
      // this.createForm = fb.group({
      // 'src' : [null, Validators.required, Validators.pattern("[a-zA-Z][a-z]+")],
      // 'res': [null, Validators.compose([Validators.required])]})
  }

  addWordToList(src: string, res: string ): void{
    let n = 0;
    this.engDicService.getWords()
                      .then(list => n = list.length);
    let word = { id: n+1, source: src, result: res };
    this.engDicService.addWord(word);
    this.message = '[ ' + src + ' - ' + res + ' ] ' + 'successfully added!';
    this.flagSubmit = true;
  }

    showConfirm() {
    if (window.confirm('Есть несохраненные изменения. Удалить их?')){
      console.log('ok');
    }
    else{
      let link = ["/create"];
      this.router.navigate(link);
    }
  }

  ngOnDestroy():void{
    if(!this.flagSubmit)
      this.showConfirm();
  }
}
