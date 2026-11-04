import { Service } from '@angular/core';
import { Product as ProductModel } from '../models/product';

@Service()
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
