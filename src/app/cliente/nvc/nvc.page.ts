import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nvc',
  templateUrl: './nvc.page.html',
  styleUrls: ['./nvc.page.scss'],
})
export class NvcPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  fecharModal():void {
    this.modalCtrl.dismiss();
  
  }

}
