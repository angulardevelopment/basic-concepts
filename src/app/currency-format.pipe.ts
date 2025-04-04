import { Pipe, PipeTransform } from '@angular/core'; 
 
@Pipe({ 
  name: 'currencyFormat' ,
  standalone: false,

}) 
export class CurrencyFormatPipe implements PipeTransform { 
 
  transform(value: number, currencySymbol: string = '$', decimalPlaces: number = 2): string { 
    if (value === null || value === undefined) { 
      return ''; 
    } 
     
    // Handle negative and positive values 
    const isNegative = value < 0; 
    const absoluteValue = Math.abs(value); 
     
    // Format the number with fixed decimals 
    const formattedValue = absoluteValue.toFixed(decimalPlaces); 
 
    // Add comma separator for thousands 
    const [integer, decimal] = formattedValue.split('.'); 
    const integerWithCommas = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
     
    // Return the formatted string with the currency symbol 
    return `${isNegative ? '-' : ''}${currencySymbol}${integerWithCommas}${decimal ? '.' + decimal : ''}`; 
  } 
} 