import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {

  constructor(private route: ActivatedRoute, private domSanitizer: DomSanitizer) { }
  url: any;
  ngOnInit() {
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(
      'https://vasco.com.br/'
    )
  }
}
