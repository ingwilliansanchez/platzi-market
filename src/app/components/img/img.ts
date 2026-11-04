import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-img',
  styleUrl: './img.scss',
  templateUrl: './img.html'
})
export class Img {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault: string = 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';

  imgError() {
    this.img = this.imageDefault;
  }
  
  imgLoaded() {
    console.log('Imagen cargada correctamente');
    this.loaded.emit(this.img);
  }
}

