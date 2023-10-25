import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NvcPage } from './nvc.page';

const routes: Routes = [
  {
    path: '',
    component: NvcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NvcPageRoutingModule {}
