import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  datas = {
    email: '',
    password: '',
  }
  constructor(private router: Router, private modalController: ModalController) { }

  login(form: NgForm) {
    let f = form.value;

    if (f.email == "vascodagama@gmail.com" && f.password == 'elias') {
      console.log(form.value)

      localStorage.setItem("client_id", '8');
      this.fecharModal();
    }
  }
  fecharModal(): void {
    this.modalController.dismiss();

  }
}
