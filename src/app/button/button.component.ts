import { Input, Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  constructor(private navCtrl: NavController, private menuCtrl: MenuController) { }
  @Input() public url: string = '';
  ngOnInit() { }

  openFirstMenu() {
    /**
     * Open the menu by menu-id
     * We refer to the menu using an ID
     * because multiple "start" menus exist.
     */
    this.menuCtrl.open('first-menu');
  }
}
