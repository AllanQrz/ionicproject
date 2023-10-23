import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Local3PageRoutingModule } from './local3-routing.module';

import { Local3Page } from './local3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Local3PageRoutingModule
  ],
  declarations: [Local3Page]
})
export class Local3PageModule {}
