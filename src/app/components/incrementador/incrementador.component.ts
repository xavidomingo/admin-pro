import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() leyenda: string = 'llegenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('leyenda', this.leyenda);
    // console.log('progreso', this.porcentaje);
   }

  ngOnInit() { }

  onChanges(nouvalor: number){
    console.log(nouvalor);
    // let elemHTML: any = document.getElementsByName('porcentaje')[0];

    let elemHTML: any = document.getElementsByName('porcentaje')[0];

    if (nouvalor >= 100) {
      this.porcentaje = 100;
    } else if (nouvalor <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = nouvalor;
    }


    // elemHTML.value = this.porcentaje;

    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit( this.porcentaje );
  }

  cambiarValor(valor: number) {
    if ( this.porcentaje + valor > 100 ) {
      this.porcentaje = 100;
      return;
    }
    if ( this.porcentaje + valor < 0 ) {
      this.porcentaje = 0;
      return;
    }


    this.porcentaje += valor;

    this.cambioValor.emit( this.porcentaje );
  }

}
