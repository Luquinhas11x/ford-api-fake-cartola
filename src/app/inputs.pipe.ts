import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputs'
})
export class InputsPipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(0,3);
  }

}
