import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnersShellComponent } from './components/owners-shell/owners-shell.component';

const routes: Routes = [
  {
    path: '',
    component: OwnersShellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnersRoutingModule {}
