import { Component } from '@angular/core';
import { Product as ProductModel } from '../../models/product';
import { Product } from '../product/product';
import { Store } from '../../services/store';

@Component({
  imports: [Product],
  selector: 'app-products',
  styleUrl: './products.scss',
  templateUrl: './products.html',
})
export class Products {

    myShoppingCart: ProductModel[] = [];
    total: number = 0;

  products:ProductModel[] = [
    {
        id: 1,
        name: 'Franela de hombre',
        price: 12,
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
        price: 5,
        image: 'https://basicoclothes.com/wp-content/uploads/2025/07/blank-marron.jpg'
    },
    {
        id: 5,
        name: 'Franela unisex',
        price: 12,
        image: 'https://basicoclothes.com/wp-content/uploads/2025/07/blank-marron.jpg'
    },
    {
        id: 6,
        name: 'Franela unisex',
        price: 8,
        image: 'https://basicoclothes.com/wp-content/uploads/2025/07/blank-marron.jpg'
    },
    {
        id: 7,
        name: 'Franela unisex',
        price: 4,
        image: 'https://basicoclothes.com/wp-content/uploads/2025/07/blank-marron.jpg'
    }
  ];

  constructor(private storeService: Store) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  onAddTotShoppingCart(product:ProductModel){
    // Add to my ShoopingCart Products
    this.storeService.addProduct(product);
    // Update the total amount of the products in the shooping cart
    this.total = this.storeService.getTotal();
    console.log('myShoppingCart', this.myShoppingCart);
  }
}
