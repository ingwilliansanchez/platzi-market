import { Component, OnInit, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-img',
  styleUrl: './img.scss',
  templateUrl: './img.html'
})
export class Img implements OnInit {
  @Input() img: string = '';

}
