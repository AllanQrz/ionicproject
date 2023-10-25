import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AgendamentosPage } from '../cliente/agendamentos/agendamentos.page';
import { CancelPage } from '../cliente/cancel/cancel.page';
import { LembretesPage } from '../cliente/lembretes/lembretes.page';
import { NvcPage } from '../cliente/nvc/nvc.page';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  url: any;

  constructor(private domSanitizer: DomSanitizer, private menuCtrl: MenuController, private navCtrl: NavController, private modalCtrl: ModalController) {}

  Agendamen(){
    this.modalCtrl.create({
      
      component: AgendamentosPage
    }).then(modal=>{
      modal.present();
    }
      )
  
  }

  Novocu(){
    this.modalCtrl.create({
      
      component: NvcPage
    }).then(modal=>{
      modal.present();
    }
      )
  
  }

  Cancel(){
    this.modalCtrl.create({
      
      component: CancelPage
    }).then(modal=>{
      modal.present();
    }
      )
  
  }

  Lembre(){
    this.modalCtrl.create({
      
      component: LembretesPage
    }).then(modal=>{
      modal.present();
    }
      )
  
  }


}



