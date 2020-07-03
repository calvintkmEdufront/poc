import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../../ngrx/model';
@Component({
  selector: 'poc-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  constructor() {}
  @Input('product') product: Product;

  ngOnInit(): void {
    // this.product.productStock
  }
}
