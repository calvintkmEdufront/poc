import { Injectable, Inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as productActions from './products.actions';
import { mergeMap, map } from 'rxjs/operators';
import { ProductsService } from '../shared-products-service';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productActions.loadProducts),
      mergeMap(() =>
        this.productService
          .mockLoadProductApiCall()
          .pipe(
            map((products) => productActions.loadProductsSuccess({ products }))
          )
      )
    );
  });
}
