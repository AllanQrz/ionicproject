import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertCadPage } from './alert-cad.page';

const routes: Routes = [
  {
    path: '',
    component: AlertCadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertCadPageRoutingModule {}
