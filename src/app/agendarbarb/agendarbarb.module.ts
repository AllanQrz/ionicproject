import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarbarbPageRoutingModule } from './agendarbarb-routing.module';

import { AgendarbarbPage } from './agendarbarb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarbarbPageRoutingModule
  ],
  declarations: [AgendarbarbPage]
})
export class AgendarbarbPageModule {}
