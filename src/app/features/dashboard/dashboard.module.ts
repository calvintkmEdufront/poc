import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
// import { ProductsModule } from '../products/products.module';

import { SharedOwnersModule } from '../shared-owners/shared-owners.module';
import { SharedProductsModule } from '../shared-products/shared-products.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedOwnersModule,
    SharedProductsModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
