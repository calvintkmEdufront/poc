import { Component, OnInit } from '@angular/core';
import { Product, ProductsState, SortingOptions } from '../../ngrx/model';
import * as actions from '../../ngrx/products.actions';
import * as OwnerActions from '../../../shared-owners/ngrx/owners.actions';
import { Owner } from '../../../shared-owners/ngrx/model';
import { getOwners } from '../../../shared-owners/ngrx/owners.selectors';
import * as selectors from '../../ngrx/products.selectors';
import {} from '../../ngrx/model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
@Component({
  selector: 'poc-products-shell',
  templateUrl: './products-shell.component.html',
  styleUrls: ['./products-shell.component.scss'],
})
export class ProductsShellComponent implements OnInit {
  constructor(private store: Store) {}
  products$: Observable<Product[]>;
  filteredProducts$: Observable<Product[]>;
  activeProduct$: Observable<Product>;
  searchTerm$: Observable<string>;
  noValidFilteredResult = false;
  activeSortOption$: Observable<SortingOptions>;
  owners: string[];
  sortOptions: string[];
  ngOnInit(): void {
    // this.store.dispatch(actions.loadProducts());
    // this.store.dispatch(OwnerActions.loadOwners());

    this.products$ = this.store.select(selectors.getProducts);
    this.activeProduct$ = this.store.select(selectors.getActiveProduct);
    this.filteredProducts$ = this.store.select(selectors.getFilteredResult);
    // .pipe(
    //   tap((products) => (this.noValidFilteredResult = products.length === 0))
    // );
    this.searchTerm$ = this.store.select(selectors.getSearchTerm);
    this.activeSortOption$ = this.store.select(selectors.getProductsSortOption);

    this.store.select(getOwners).subscribe((owners: Owner[]) => {
      this.owners = owners.map((owner) => owner.name);
    });
    this.setSortOption();
  }

  setSortOption() {
    this.sortOptions = [];

    for (var key in SortingOptions) {
      this.sortOptions.push(SortingOptions[key]);
    }
  }

  setActiveProduct(product: Product) {
    let id = product.productId;
    this.store.dispatch(actions.setActiveProduct({ id }));
  }
  createNewProduct() {
    let id = NaN;
    this.store.dispatch(actions.setActiveProduct({ id }));
  }
  updateStoreWithNewProduct(product) {
    this.resetProductId();
    this.store.dispatch(actions.createProduct({ product }));
  }
  deleteProduct(product: Product) {
    this.resetProductId();
    let id = product.productId;
    this.store.dispatch(actions.deleteProduct({ id }));
  }
  udpateProduct(product) {
    this.resetProductId();
    this.store.dispatch(actions.updateProduct({ product }));
  }

  resetProductId() {
    this.store.dispatch(actions.setActiveProduct({ id: null }));
  }

  updateFilteredResults(search) {
    this.store.dispatch(actions.setSearchTerm({ search }));
    this.resetProductId();
  }

  updateSortOption(option) {
    this.store.dispatch(actions.setProductSortingOption({ option }));
  }
}
