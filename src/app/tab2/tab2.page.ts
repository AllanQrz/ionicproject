import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  url: any;

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {}

  ngOnInit(): void {
    
  }
  // Função para navegar para a nova página com o parâmetro
navPag() {

  // Use o método navigateForward para navegar para a nova página
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


}
