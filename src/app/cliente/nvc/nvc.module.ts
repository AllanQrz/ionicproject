import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NvcPageRoutingModule } from './nvc-routing.module';

import { NvcPage } from './nvc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NvcPageRoutingModule
  ],
  declarations: [NvcPage]
})
export class NvcPageModule {}
