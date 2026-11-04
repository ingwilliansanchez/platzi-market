import { Component } from '@angular/core';
import { Product as ProductModel } from '../../models/product';
import { Product } from '../product/product';

@Component({
  imports: [Product],
  selector: 'app-products',
  styleUrl: './products.scss',
  templateUrl: './products.html',
})
export class Products {
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
}
