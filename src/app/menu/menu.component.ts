import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  showMenu;
  constructor() { }

  ngOnInit() {
  }

  buttonMenu(event) {
    if (event) {
      this.showMenu = !this.showMenu;
    }
  }

}
