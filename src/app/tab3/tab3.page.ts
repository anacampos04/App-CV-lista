import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contador:number
  mensaje:string

  isToastOpen = false;
  
  constructor() {
    this.mensaje=""
    this.contador=3
  }
  listaTrabj = [["Teleoperadora", "5 meses"], ["Responsable Dpto SEO en agencia de Marketing digital", "24 meses"], ["Fotógrafa", "18 meses"]]

  sumar(){
    this.contador++
    if(this.contador==37){
      this.mensaje="Hora de jubilarse!!:)"
      this.mostrarToast();
    }
    else if(this.contador >= 38){
      this.isToastOpen=false;
      this.mensaje="No, no, ahora ya estoy jubilada, no hay vuelta atrás ;)"
      this.mostrarToast();
    }
  }
  
  mostrarToast() {
    this.isToastOpen = true;
    setTimeout(() => {
      this.isToastOpen = false;
    }, 5000); // Cierra el Toast después de 6 segundos
  }
}
