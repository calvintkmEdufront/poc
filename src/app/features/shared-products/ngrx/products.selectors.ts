//Selectors
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductsState, Product, SortingOptions, emptyProduct } from './model';

const productsFeatureState = createFeatureSelector<ProductsState>('products');
//generic selectors
export const getProducts = createSelector(
  productsFeatureState,
  (state: ProductsState) => state.products
);
export const getProductsSortOption = createSelector(
  productsFeatureState,
  (state: ProductsState) => state.sortingOption
);

export const getActiveProductIndex = createSelector(
  productsFeatureState,
  (state: ProductsState) => state.activeProductIndex
);

export const getSearchTerm = createSelector(
  productsFeatureState,

  (state: ProductsState) => state.searchTerm
);

export const checkIfCurrentlyIsCreatingNew = createSelector(
  productsFeatureState,
  (state: ProductsState) => Number.isNaN(state.activeProductIndex)
);

//combination seletors

export const getActiveProduct = createSelector(
  productsFeatureState,
  getActiveProductIndex,
  checkIfCurrentlyIsCreatingNew,
  (state: ProductsState, activeIndex: number, creatingNew: boolean) => {
    if (creatingNew) {
      return emptyProduct;
    } else {
      let results = state.products.find(
        (product) => product.productId == activeIndex
      );
      return results ? results : null;
    }
  }
);

export const getSortedProducts = createSelector(
  productsFeatureState,
  getProductsSortOption,
  (state: ProductsState, option: SortingOptions) => {
    let products = [...state.products];
    if (option === SortingOptions.alphabeticaly) {
      products.sort((a, b) => (a.productName < b.productName ? -1 : 1));
      //sort by name
    } else if (option === SortingOptions.id) {
      products.sort((a, b) => (a.productId < b.productId ? -1 : 1));
    } else if (option === SortingOptions.price) {
      products.sort((a, b) => (a.productPrice < b.productPrice ? -1 : 1));
    } else if (option === SortingOptions.availability) {
      products.sort((a, b) => (a.productStock < b.productStock ? -1 : 1));
    }
    // console.log(products);

    return products;
  }
);

export const getFilteredResult = createSelector(
  productsFeatureState,
  getSortedProducts,
  getSearchTerm,

  (state, sortedProducts, searchTerm: string) => {
    let processedSearchTerm = searchTerm.toLowerCase().replace(' ', '');
    // console.log(sortedProducts);
    return sortedProducts.filter((product) => {
      let processedProduct = `${product.productName
        .toLowerCase()
        .replace(' ', '')}${product.productCategory
        .toLowerCase()
        .replace(' ', '')}`;
      return processedProduct.includes(processedSearchTerm);
    });
  }
);
