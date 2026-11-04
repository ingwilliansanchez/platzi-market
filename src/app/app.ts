import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Img } from './components/img/img';
import { Product } from './components/product/product';
import { Product as ProductModel } from './models/product';
@Component({
  imports: [RouterOutlet, Img, FormsModule, Product],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('platzi-market');
  imgParent: string = '';
  products:ProductModel[] = [
    {
        id: 1,
        name: 'Franela de hombre',
        price: 10,
        image: 'https://fashiontexve.com/cdn/shop/files/Frontal-Regular-Hombre-22.webp?v=1757606830&width=1528'
    },
    {
        id: 2,
        name: 'Franela de unisex',
        price: 10,
        image: 'https://basicoclothes.com/wp-content/uploads/2025/07/blanks-verde.jpg'
    },
    {
        id: 3,
        name: 'Franela unisex',
        price: 10,
        image: 'https://basicoclothes.com/wp-content/uploads/2025/07/blank-marron.jpg'
    }
  ];

  onLoaded(img: string) {
    console.log('Imagen cargada correctamente desde el componente padre', img);
  }
}
