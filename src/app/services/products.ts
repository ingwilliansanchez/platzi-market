import { inject, Injectable } from '@angular/core';
import { Product as ProductModel } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Products {
    private http = inject(HttpClient);

    private apiUrl = 'https://fakestoreapi.com';

    getAllProducts(): Observable<ProductModel[]> {
        return this.http.get<ProductModel[]>(`${this.apiUrl}/products`);
    }
}
