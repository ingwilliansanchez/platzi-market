import { Injectable } from '@angular/core';
import { Product as ProductModel } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Store {

    private myShoppingCart: ProductModel[] = [];
    
    //Define State Management with BehaviorSubject
    private myCart = new BehaviorSubject<ProductModel[]>([]);
    myCart$ = this.myCart.asObservable();

    addProduct(product: ProductModel) {
        //This is Product Arrays
        this.myShoppingCart.push(product);
        //This is Observable
        this.myCart.next(this.myShoppingCart);
    }

    getTotal(){
        return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    }

    getShoppingCart(){
        return this.myShoppingCart;
    }

}
