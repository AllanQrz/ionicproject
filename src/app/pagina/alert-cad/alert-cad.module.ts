import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertCadPageRoutingModule } from './alert-cad-routing.module';

import { AlertCadPage } from './alert-cad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertCadPageRoutingModule
  ],
  declarations: [AlertCadPage]
})
export class AlertCadPageModule {}
