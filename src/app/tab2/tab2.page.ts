import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  contador:number;
  constructor() {
   this.contador=0 
  }
  sumar(){
    this.contador++
  }
  //lista = ["pepe", "maria","juan"]
  lista = [["pepe", 23], ["maria",43],["juan", 14]]

}
