import { Component } from '@angular/core';
import { Converter } from './Converter';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  converter!: Converter;
  options: any = [];
  selectedOption: string = 'Selecione...';
  numberToBeConverted!: number;
  result!: number;


  ngOnInit(): void {
    this.converter = new Converter();
    this.options = this.converter.setVariableItems();
  }

  onChangeSelect() {
    this.converter.splitStringItems(this.selectedOption);
    this.converter.setCalculation();
    this.result = this.converter.result;
  }

  validateNumber(event: any) {
    const newValue = event.target.value.replace(',', '.');
    this.converter.setNumberToBeConverted(Number(newValue));
    this.result = this.converter.result;
  }
}
