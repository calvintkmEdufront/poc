import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsShellComponent } from './components/products-shell/products-shell.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductSingleViewComponent } from './components/product-single-view/product-single-view.component';
import { ProductsRoutingModule } from './products-routing.module';
import { StoreFeatureModule, StoreModule } from '@ngrx/store';
import { productsReducer } from './ngrx/products.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './ngrx/products.effects';
import { ProductNavComponent } from './components/product-nav/product-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedOwnersModule } from '../shared-owners/shared-owners.module';
import { SharedProductsModule } from '../shared-products/shared-products.module';

@NgModule({
  declarations: [
    ProductsShellComponent,
    ProductCardComponent,
    ProductSingleViewComponent,
    ProductNavComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    SharedOwnersModule,
    SharedProductsModule,
  ],
  exports: [
    ProductsShellComponent,
    ProductCardComponent,
    ProductSingleViewComponent,
  ],
})
export class ProductsModule {}
