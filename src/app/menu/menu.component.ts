import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  toggleStateShow: boolean;
  toggleMenu(): void {
    this.toggleStateShow = !this.toggleStateShow;
  }

  constructor() { }

  ngOnInit() {
  }

}
