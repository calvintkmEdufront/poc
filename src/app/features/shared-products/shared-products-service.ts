import { Injectable } from '@angular/core';
import { Product } from './ngrx/model';
import { sampleProductList } from './ngrx/product-data';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  mockLoadProductApiCall(): Observable<Product[]> {
    return of(sampleProductList);
  }
}
