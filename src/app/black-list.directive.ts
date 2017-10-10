import { Directive } from '@angular/core';
import {  AbstractControl, ValidatorFn, Validators } from '@angular/forms';


@Directive({
  selector: '[appBlackList]'
})

export class BlackListDirective {

  constructor() { }

}
