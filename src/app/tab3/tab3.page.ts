import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  url: any;

  constructor(private domSanitizer: DomSanitizer) {}

  cursos() {
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(
      'https://www.rj.senac.br/cursos/beleza-e-bem-estar'
    )
  }


}
