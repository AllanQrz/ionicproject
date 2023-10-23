import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Local2PageRoutingModule } from './local2-routing.module';

import { Local2Page } from './local2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Local2PageRoutingModule
  ],
  declarations: [Local2Page]
})
export class Local2PageModule {}
