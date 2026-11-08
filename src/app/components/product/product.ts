import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Product as ProductModel } from '../../models/product';
import { Img } from '../img/img';
import { ReversePipe } from '../../pipes/reverse-pipe';
import { Highlight as appHighlight } from '../../directives/highlight';

@Component({
  imports: [Img, CurrencyPipe, ReversePipe, UpperCasePipe, appHighlight],
  selector: 'app-product',
  styleUrl: './product.scss',
  templateUrl: './product.html',
})
export class Product {

  @Input() product: ProductModel ={
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  }

  @Output() addedProduct = new EventEmitter<ProductModel>();

  constructor() {
    console.log('product component created', this.product);
  }

  addToCart(){
    this.addedProduct.emit(this.product);

  }

}
