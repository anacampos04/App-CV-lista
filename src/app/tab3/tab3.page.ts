import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contador:number
  mensaje:string;

  isToastOpen = true;
  
  constructor() {
    this.contador=3
    this.mensaje="Mi vida laboral acaba de comenzar"
  }
  sumar(){
    this.contador++
    if(this.contador>=37){
    }
  }
  exp = [["pepe", 23], ["maria",43],["juan", 14]]
  listaTrabj = [["Teleoperadora", "5 meses"], ["Responsable Dpto SEO en agencia de Marketing digital", "24 meses"], ["Fotógrafa", "18 meses"]]
  
  

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}
