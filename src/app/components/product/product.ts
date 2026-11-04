import { Component, Input } from '@angular/core';
import { Product as ProductModel } from '../../models/product';
import { Img } from '../img/img';

@Component({
  imports: [Img],
  selector: 'app-product',
  styleUrl: './product.scss',
  templateUrl: './product.html',
})
export class Product {

  @Input() product: ProductModel ={
    id: 0,
    name: '',
    price: 0,
    image: ''
  }

  constructor() {
    console.log('product component created', this.product);
  }

}
