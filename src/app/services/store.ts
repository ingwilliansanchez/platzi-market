import { Injectable } from '@angular/core';
import { Product as ProductModel } from '../models/product';

@Injectable({ providedIn: 'root' })
export class Store {

    private myShoppingCart: ProductModel[] = [];

    addProduct(product: ProductModel) {
        this.myShoppingCart.push(product);
    }

    getTotal(){
        return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    }

    getShoppingCart(){
        return this.myShoppingCart;
    }

}
