import { createReducer, on, State } from '@ngrx/store';
import * as fromActions from './products.actions';
import { ProductsState, Product, SortingOptions, emptyProduct } from './model';
import { Action } from 'rxjs/internal/scheduler/Action';

const initialState: ProductsState = {
  products: [],
  activeProductIndex: null,
  sortingOption: SortingOptions.alphabeticaly,
  searchTerm: '',
};

export const productsReducer = createReducer(
  initialState,
  on(
    fromActions.loadProductsSuccess,
    (state, action): ProductsState => {
      let products = action.products;
      return { ...state, products };
    }
  ),
  on(
    fromActions.createProduct,
    (state, action): ProductsState => {
      let product = { ...action.product };
      let largestCurrentId = state.products
        .map((product) => product.productId)
        .reduce((a, b) => (a > b ? a : b));
      // console.log(largestCurrentId);
      product.productId = largestCurrentId + 1;
      let products: Product[] = [...state.products, product];
      return { ...state, products };
    }
  ),
  on(
    fromActions.deleteProduct,
    (state, action): ProductsState => {
      let products: Product[] = state.products.filter((products) => {
        return products.productId !== action.id;
      });
      return { ...state, products };
    }
  ),
  on(
    fromActions.setActiveProduct,
    (state, action): ProductsState => {
      let activeProductIndex = action.id;
      return { ...state, activeProductIndex };
    }
  ),
  on(
    fromActions.updateProduct,
    (state, action): ProductsState => {
      let products: Product[] = state.products.map((product) =>
        product.productId === action.product.productId
          ? action.product
          : product
      );
      return { ...state, products };
    }
  ),
  on(
    fromActions.setProductSortingOption,
    (state, action): ProductsState => {
      let sortingOption = action.option;
      return { ...state, sortingOption };
    }
  ),
  on(
    fromActions.setSearchTerm,
    (state, action): ProductsState => {
      let searchTerm = action.search;
      return { ...state, searchTerm };
    }
  )
);

//   export function reducer(state: ProductsState | undefined, action: Action) {
//     return productsReducer(state, action);
//   }
