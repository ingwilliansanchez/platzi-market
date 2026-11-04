import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-nav',
  styleUrl: './nav.scss',
  templateUrl: './nav.html',
})
export class Nav {
  activeMenu:boolean = false;

  toogleMenu(){
    this.activeMenu = !this.activeMenu;
  }
}
