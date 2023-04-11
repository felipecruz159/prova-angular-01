export class Converter {
  number!: number; // number to be converted
  measurementInput!: string; // type of (input) number to be converted (celsius, fahrenheit, kelvin etc)
  measurementOutput!: string; // type of (output) number that will be converted (to celsius, to fahrenheit, to kelvin etc)
  errorMessage!: string;
  result!: number;

  splitStringItems(items: string) { // get items and split into measurementInput and measurementOutput
    let measurementoptionsNumbersay: string[] = items.split(" "); // split items
    measurementoptionsNumbersay.splice(1, 1); // remove the 1 index from measurement
    this.setMeasurementTypes(measurementoptionsNumbersay[0], measurementoptionsNumbersay[1]); // set measurement types
  }

  setMeasurementTypes(input: string, output: string) { // set measurement types
    this.measurementInput = input;
    this.measurementOutput = output;
  }

  setNumberToBeConverted(number: number) { // set number
    this.number = number;
    this.setCalculation();
  }

  setErrorMessage(message: string) { // set error message
    this.errorMessage = message;
  }

  setVariableItems() { // verify the converter type
    return [
      'Centímetro para Metro',
      'Centímetro para Quilômetro',
      'Metro para Centímetro',
      'Metro para Quilômetro',
      'Quilômetro para Metro',
      'Quilômetro para Centímetro'
    ];
  }

  setCalculation() {
    this.mapMoedaCalculation();
  }

  mapCombinations(optionsNumbers: object[],) {
    let index1 = optionsNumbers.findIndex(option => option.hasOwnProperty(this.measurementInput));
    let index2 = optionsNumbers.findIndex(option => option.hasOwnProperty(this.measurementOutput));

    let functionName = `${index1}-${index2}`;
    let functionToExecute = this.functions[functionName];

    if (functionToExecute) {
      functionToExecute();
    }
  }

  functions!: any;
  mapMoedaCalculation() {
    let optionsNumbers = [
      { 'Real': 0 },
      { 'Dólar': 1 },
      { 'Euro': 2 }
    ];

    this.mapCombinations(optionsNumbers);
  }

  convertCelsiusToFarenheit(number: number) {
    return (number * (9 / 5)) + 32
  }

  convertCelsiusToKelvin(number: number) {
    return number + 273.15;
  }

  convertFarenheitToCelsius(number: number) {
    return (number - 32) * (5 / 9);
  }

  convertFarenheitToKelvin(number: number) {
    return (number + 459.67) * (5 / 9);
  }

  convertKelvinToCelsius(number: number) {
    return number - 273.15;
  }

  convertKelvinToFarenheit(number: number) {
    return (number * (9 / 5)) - 459.67;
  }
}
