import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  acordionAtivo:any;
  constructor() {}


  openAcordion(tipo){
    this.acordionAtivo == tipo? this.acordionAtivo = null: this.acordionAtivo = tipo;
  }

}
