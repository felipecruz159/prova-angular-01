import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})

export class ConverterComponent {
  options: string[] = [
    'Real para Dólar',
    'Real para Euro',
    'Dólar para Real',
    'Dólar para Euro',
    'Euro para Real',
    'Euro para Dólar'
  ];

  selectedOption: string = 'Selecione...';
  price!: number;
  numberToBeConverted!: number;
  result!: number;

  setResult() {
    if ((this.price !== 0 && this.numberToBeConverted !== 0) && this.price > 0 && this.numberToBeConverted > 0 ){
      this.result = this.numberToBeConverted * this.price;
    }
    else if (this.price !== 0 && this.price > 0){
      this.result = this.price;
    }
    else if (this.numberToBeConverted !== 0 && this.numberToBeConverted > 0){
      this.result = this.numberToBeConverted;
    }
  }
}
