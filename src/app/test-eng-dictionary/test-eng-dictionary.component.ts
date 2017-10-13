import { Component, OnInit } from '@angular/core';

import { EngDictionary } from '../eng-dictionary';
import { EngDictionaryService } from '../eng-dictionary-service.service';


@Component({
  selector: 'app-test-eng-dictionary',
  templateUrl: './test-eng-dictionary.component.html',
  styleUrls: ['./test-eng-dictionary.component.css']
})
export class TestEngDictionaryComponent implements OnInit {

  listOfPairs: EngDictionary[] = [];
  currentWord: EngDictionary;
  currentVersions: EngDictionary[] = [];

  countRightAnswer: number = 0;
  countAllClick: number = 0;
  messageOfError: string = "";

  flagOfEnd: boolean = false;
  constructor(
      private engDicService: EngDictionaryService ) { }

  startTest( n: number): void {

    if(this.listOfPairs.length < 20 )
      this.messageOfError = "Excuse me, the dictionary has smoll vocabulary. Add words, please!";
    else{
      this.currentWord = this.listOfPairs[n];
      this.currentVersions = [this.currentWord];
      while (this.currentVersions.length < 6){
        let obj = this.listOfPairs[Math.floor(Math.random() * this.listOfPairs.length)];
        if(this.currentVersions.indexOf(obj) == -1)
          this.currentVersions.push(obj);
      }
      this.currentVersions.sort((a,b) => b.id - a.id);
      this.currentVersions.reverse();
    }
  }

  checkPair(source: EngDictionary, version: EngDictionary): void {
    let res = source.id === version.id;
    this.countAllClick++;
    if (res)
      this.countRightAnswer++;
    this.flagOfEnd = (this.countAllClick == this.listOfPairs.length);
    console.log(this.countAllClick + ' ' + this.listOfPairs.length + ' ' + this.flagOfEnd);
    if(!this.flagOfEnd)
      this.startTest(this.countAllClick);
  }

  ngOnInit() {
    this.engDicService.getWords()
                      .then(list => this.listOfPairs = list.slice(0,20));
  }
}
