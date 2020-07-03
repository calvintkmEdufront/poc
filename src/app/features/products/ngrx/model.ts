//Interfaces
export interface ProductsState {
  products: Product[];
  activeProductIndex: number | null;
  sortingOption: SortingOptions;
  searchTerm: string;
}

export interface Product {
  productId: number;
  productCategory: string;
  productName: string;
  productImage: string;
  productStock: number;
  productPrice: string;
  owner: string;
}

export enum SortingOptions {
  alphabeticaly = 'alphabeticaly',
  price = 'price',
  availability = 'availabilty',
  id = 'id',
}

export const emptyProduct: Product = {
  productName: '',
  productId: -1000,
  productImage: '',
  productCategory: '',
  owner: '',
  productPrice: '0',
  productStock: 0,
};
