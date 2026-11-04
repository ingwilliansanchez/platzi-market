import { Component, Input } from '@angular/core';
import { Product as ProductModel } from '../../models/product';

@Component({
  imports: [],
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

}
