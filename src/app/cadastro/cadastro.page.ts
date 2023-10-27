import { Component, OnInit } from '@angular/core';
import { ClientService } from '../models/service/client.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  datas = {
    nameClient: '',
    responsible: '',
    age: 0,
    phoneNumber: '',
    email: '',
    password: '',
  };
  constructor(private modalCtrl: ModalController, private client: ClientService, private router: Router) { }

  ngOnInit() {
  }

  fecharModal(): void {
    this.modalCtrl.dismiss();

  }
  salvarCliente(form: NgForm) {
    const client = form.value;
    this.client.create(client).subscribe(() => {

      this.fecharModal()
    })



  }
}
