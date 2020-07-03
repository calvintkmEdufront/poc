import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersShellComponent } from './components/owners-shell/owners-shell.component';

import { OwnersRoutingModule } from './owners-routing.module';
import { SharedOwnersModule } from '../shared-owners/shared-owners.module';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { ownerReducer } from './ngrx/owners.reducers';
// import { OwnerEffect } from './ngrx/owners.effects';

import { OwnerSingleViewComponent } from './components/owners-single-view/owner-single-view.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OwnersShellComponent, OwnerSingleViewComponent],
  imports: [
    OwnersRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedOwnersModule,
    // StoreModule.forFeature('owners', ownerReducer),
    // EffectsModule.forFeature([OwnerEffect]),
  ],
})
export class OwnersModule {}
