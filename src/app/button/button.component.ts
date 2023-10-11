import { Input, Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  constructor(private navCtrl: NavController) { }
  @Input() public url: string = '';
  ngOnInit() { }

  navigate(url: string) {
    this.navCtrl.navigateForward(url);


  }
}
