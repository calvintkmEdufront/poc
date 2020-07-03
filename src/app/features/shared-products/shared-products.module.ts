import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreFeatureModule, StoreModule } from '@ngrx/store';
import { productsReducer } from './ngrx/products.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './ngrx/products.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedOwnersModule } from '../shared-owners/shared-owners.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedOwnersModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  exports: [],
})
export class SharedProductsModule {}
