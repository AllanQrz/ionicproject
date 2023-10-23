import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agendarbarb',
  templateUrl: './agendarbarb.page.html',
  styleUrls: ['./agendarbarb.page.scss'],
})
export class AgendarbarbPage implements OnInit {

  constructor(private modalCtrl:ModalController ,private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  fecharModal() {
    this.modalCtrl.dismiss();
  }

}
