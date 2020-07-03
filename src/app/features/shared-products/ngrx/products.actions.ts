import { createAction, props } from '@ngrx/store';
import { ProductsState, Product, SortingOptions } from './model';

export const loadProducts = createAction('[Products API] load product');
export const loadProductsSuccess = createAction(
  `[Products API] load product Success`,
  props<{ products: Product[] }>()
);
export const updateProduct = createAction(
  '[Products] update product',
  props<{ product: Product }>()
);
export const createProduct = createAction(
  '[Products] create product',
  props<{ product: Product }>()
);
export const deleteProduct = createAction(
  '[Products] load product',
  props<{ id: number }>()
);
export const setActiveProduct = createAction(
  `[Products] set active product`,
  props<{ id: number }>()
);
export const setProductSortingOption = createAction(
  `[Products] set sorting option`,
  props<{ option: SortingOptions }>()
);

export const setSearchTerm = createAction(
  `[Products] set search term`,
  props<{ search: string }>()
);
