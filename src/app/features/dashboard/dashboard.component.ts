import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadOwners } from '../shared-owners/ngrx/owners.actions';
import { loadProducts } from '../shared-products/ngrx/products.actions';
@Component({
  selector: 'poc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    console.log('dashbaord init');
    this.store.dispatch(loadOwners());
    this.store.dispatch(loadProducts());
    this.showErrorText = this.router.url === '/dashboard';
  }

  showErrorText;

  isActiveRoute(route) {
    return this.router.url === route;
  }

  menuOptions = [
    { title: 'Products', route: '/dashboard/products' },
    { title: 'Owners', route: '/dashboard/owners' },
  ];
}
