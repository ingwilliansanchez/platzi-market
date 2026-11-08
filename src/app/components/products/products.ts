import { Component, inject, OnInit } from '@angular/core';
import { Product as ProductModel } from '../../models/product';
import { Product } from '../product/product';
import { Store } from '../../services/store';
import { Products as ProductsService } from '../../services/products';
import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { TimeAgoPipe } from '../../pipes/time-ago-pipe';

@Component({
  imports: [Product, DatePipe, UpperCasePipe, TimeAgoPipe, CurrencyPipe],
  selector: 'app-products',
  styleUrl: './products.scss',
  templateUrl: './products.html',
})
export class Products implements OnInit{

    myShoppingCart: ProductModel[] = [];
    total: number = 0;

    //pIPE
    today = new Date();
    date = new Date(2026, 5, 1);

  products:ProductModel[] = [];
  //Dependency Injection
  storeService: Store = inject(Store);
  productsService: ProductsService = inject(ProductsService);

  onAddTotShoppingCart(product:ProductModel){
    // Add to my ShoopingCart Products
    this.storeService.addProduct(product);
    this.myShoppingCart = this.storeService.getShoppingCart();
    // Update the total amount of the products in the shooping cart
    this.total = this.storeService.getTotal();
    console.log('myShoppingCart', this.myShoppingCart);
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data: ProductModel[]) => {
      console.log('data', data);
      this.products = data;
    });
  }
}
