import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {

  

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

   
    return utcDay !== 0 && utcDay !== 6;
  };

  constructor(private modalCtrl: ModalController,private toastCtrl: ToastController , private alertController: AlertController) { }

  ngOnInit() {
  }

  fecharModal():void {
    this.modalCtrl.dismiss();
  
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Agendamento Marcado',
      subHeader: 'Comfira seu E-mail para comfirmar a data e o horário',
      
      buttons: ['OK'],
    });

    await alert.present().then(modal=>{
      this.fecharModal();

    });
    
    
  }
}


