import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AgendamentosPage } from '../cliente/agendamentos/agendamentos.page';
import { CancelPage } from '../cliente/cancel/cancel.page';
import { LembretesPage } from '../cliente/lembretes/lembretes.page';
import { NvcPage } from '../cliente/nvc/nvc.page';
import { CadastroPage } from '../cadastro/cadastro.page';
import { LoginPage } from '../login/login.page';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  item;
  url: any;

  constructor(private domSanitizer: DomSanitizer, private menuCtrl: MenuController, private navCtrl: NavController, private modalCtrl: ModalController) {
    this.item = localStorage.getItem('client_id')
  }

  cadastro() {
    this.modalCtrl.create({

      component: CadastroPage
    }).then(modal => {
      modal.present();
    }
    )
  }
  logar() {
    this.modalCtrl.create({

      component: LoginPage
    }).then(modal => {
      modal.present();
    }
    )
  }
  Agendamen() {
    this.modalCtrl.create({

      component: AgendamentosPage
    }).then(modal => {
      modal.present();
    }
    )

  }

  Novocu() {
    this.modalCtrl.create({

      component: NvcPage
    }).then(modal => {
      modal.present();
    }
    )

  }

  Cancel() {
    this.modalCtrl.create({

      component: CancelPage
    }).then(modal => {
      modal.present();
    }
    )

  }

  Lembre() {
    this.modalCtrl.create({

      component: LembretesPage
    }).then(modal => {
      modal.present();
    }
    )

  }


}



