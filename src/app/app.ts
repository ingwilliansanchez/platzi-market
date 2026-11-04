import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Img } from './components/img/img';
import { Products } from './components/products/products';
@Component({
  imports: [RouterOutlet, Img, FormsModule, Products],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('platzi-market');
  imgParent: string = '';
  

  onLoaded(img: string) {
    console.log('Imagen cargada correctamente desde el componente padre', img);
  }
}
