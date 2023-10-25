import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public alertButtons = ['OK'];

  isAlertOpen = false;
  public alertButons = ['OK'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }


  
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
    

    
  }

  
}


