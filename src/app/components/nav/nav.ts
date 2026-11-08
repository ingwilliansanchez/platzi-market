import { Component, inject, OnInit } from '@angular/core';
import { Store as StoreServices } from '../../services/store';

@Component({
  imports: [],
  selector: 'app-nav',
  styleUrl: './nav.scss',
  templateUrl: './nav.html',
})
export class Nav implements OnInit {
  activeMenu = false;
  counter = 0;

  storeService: StoreServices = inject(StoreServices);

  ngOnInit(): void {
    //This is same to them in React.js
    this.storeService.myCart$.subscribe((data) => {
      console.log(data.length);
      this.counter = data.length;
    });
  }

  toogleMenu(){
    this.activeMenu = !this.activeMenu;
  }
}
