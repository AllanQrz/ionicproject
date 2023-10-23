import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';<<<<<<< master
import { AgendarPage } from '../agendar/agendar.page';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
   presentingElement = undefined;

  url: any;
  constructor(private navCtrl: NavController, private alertCtrl: AlertController,private modalCtrl: ModalController) {}
  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private actionSheetCtrl: ActionSheetController) {}

  ngOnInit(): void {
    
  }
navPag() {
  this.navCtrl.navigateForward('local');
}
navPag2(){
this.navCtrl.navigateForward('local2');
}

navPag3(){
this.navCtrl.navigateForward('local3')
}
async alertPrompt(){
  const alert = await this.alertCtrl.create({
    header:'Agendar Serviço',
    inputs:[
      {
        placeholder: 'Nome completo',
      },
      {
        placeholder: 'Email',
        attributes: {
          maxlength: 30,
        },
      },
      {
        type: 'number',
        placeholder: 'Telefone',
        min: 1,
        max: 11,
      },
      {
        type:'datetime-local'
        
      },
      
    ],
    buttons:[
      {
        text:'Agendar',
        role:'cancel',
        handler:(form)=>{
          console.log(form);
        }
      }
    ]
  }

  )
  await alert.present();
}
Agendar(){
  this.modalCtrl.create({
    
    component: AgendarPage
  }).then(modal=>{
    modal.present();
  }
    )

canDismiss = async () => {
  const actionSheet = await this.actionSheetCtrl.create({
    header: 'Are you sure?',
    buttons: [
      {
        text: 'Yes',
        role: 'confirm',
      },
      {
        text: 'No',
        role: 'cancel',
      },
    ],
  });

  actionSheet.present();

  const { role } = await actionSheet.onWillDismiss();

  return role === 'confirm';
};
  
}

}


