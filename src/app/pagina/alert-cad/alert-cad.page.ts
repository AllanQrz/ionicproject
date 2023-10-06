import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-cad',
  templateUrl: './alert-cad.page.html',
  styleUrls: ['./alert-cad.page.scss'],
})
export class AlertCadPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public alertButtons = ['OK'];
  public alertInputs = [
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
  ];


}
