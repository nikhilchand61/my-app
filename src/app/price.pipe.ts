import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return "Rs. "+value+" /-";
    // return value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    // if (value == null) return '';
    
    // let [integerPart, decimalPart] = value?.toString().split('.');
    // integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // if (integerPart.length > 3) {
    //   integerPart = integerPart.replace(/\B(?=(\d{2})+(\d{3})+(?!\d))/g, ',');
    // }
    // integerPart = "Rs. "+integerPart+" /-";

    // if (decimalPart) {
    //   return `${integerPart}.${decimalPart}`;
    // } else {
    //   return integerPart;
    // }
  }

}
