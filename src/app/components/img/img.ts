import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-img',
  styleUrl: './img.scss',
  templateUrl: './img.html'
})
export class Img implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault: string = 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
  counter = 0;
  counterFn: number | undefined;
  showImg: boolean = true;

  constructor() {
    console.log('img component created -> constructor', this.img);
  }

  ngOnInit(): void {
    console.log('img component initialized -> ngOnInit', this.img);
  }

  ngOnChanges(): void {
    console.log('img changed', this.img);
  }

  ngAfterViewInit(): void {
    console.log('img view initialized');
  }

  ngOnDestroy(): void {
    console.log('img component destroyed');
    window.clearInterval(this.counterFn);
  }

  imgError() : void {
    this.img = this.imageDefault;
  }
  
  imgLoaded() {
    console.log('Imagen cargada correctamente');
    this.loaded.emit(this.img);
  }

  toggleCounter() {
    this.showImg = !this.showImg;
  }
}

