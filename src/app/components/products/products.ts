import { Component, inject, OnInit } from '@angular/core';
import { Product as ProductModel } from '../../models/product';
import { Product } from '../product/product';
import { Store } from '../../services/store';
import { Products as ProductsService } from '../../services/products';

@Component({
  imports: [Product],
  selector: 'app-products',
  styleUrl: './products.scss',
  templateUrl: './products.html',
})
export class Products implements OnInit{

    myShoppingCart: ProductModel[] = [];
    total: number = 0;

  products:ProductModel[] = [];
  //Dependency Injection
  storeService: Store = inject(Store);
  productsService: ProductsService = inject(ProductsService);

  onAddTotShoppingCart(product:ProductModel){
    // Add to my ShoopingCart Products
    this.storeService.addProduct(product);
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
