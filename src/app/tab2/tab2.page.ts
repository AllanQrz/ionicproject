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
  this.navCtrl.navigateForward('local')
}
async alertPrompt(){
  const alert = await this.alertCtrl.create({
    header:'Acesso Restrito!',
    inputs:[
      {
        placeholder: 'Name',
      },
      {
        placeholder: 'Nickname (max 8 characters)',
        attributes: {
          maxlength: 8,
        },
      },
      {
        type: 'number',
        placeholder: 'Age',
        min: 1,
        max: 100,
      },
      {
        type: 'textarea',
        placeholder: 'A little about yourself',
      },
    ],
    buttons:[
      {
        text:'cancel',
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
