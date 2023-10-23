import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Local2Page } from './local2.page';

const routes: Routes = [
  {
    path: '',
    component: Local2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Local2PageRoutingModule {}
