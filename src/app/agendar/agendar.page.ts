import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {

  constructor(private modalCtrl: ModalController,private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  fecharModal() {
    this.modalCtrl.dismiss();
  }


}
