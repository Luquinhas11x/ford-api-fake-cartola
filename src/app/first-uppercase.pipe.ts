import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUppercase'
})
export class FirstUppercasePipe implements PipeTransform {

  transform(value: string): string {
    var firtsLetter = value[0]
    value = firtsLetter.toUpperCase() + value.slice(1)
    return value;
  }

}
