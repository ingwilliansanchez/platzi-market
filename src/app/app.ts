import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Products } from './components/products/products';
import { Nav } from './components/nav/nav';
@Component({
  imports: [RouterOutlet, FormsModule, Products, Nav],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('platzi-market');
  imgParent = '';
  

  onLoaded(img: string) {
    console.log('Imagen cargada correctamente desde el componente padre', img);
  }
}
