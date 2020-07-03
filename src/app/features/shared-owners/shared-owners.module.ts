import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreFeatureModule, StoreModule } from '@ngrx/store';
import { ownerReducer } from './ngrx/owners.reducers';
import { EffectsModule } from '@ngrx/effects';
import { OwnerEffect } from './ngrx/owners.effects';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    StoreModule.forFeature('owners', ownerReducer),
    EffectsModule.forFeature([OwnerEffect]),
  ],
  exports: [],
})
export class SharedOwnersModule {}
