import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { DashboardModule } from './features/dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    DashboardModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: `poc debugger`,
      maxAge: 30,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
