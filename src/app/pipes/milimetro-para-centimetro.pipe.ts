import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milimetroParaCentimetro'
})
export class MilimetroParaCentimetroPipe implements PipeTransform {

  transform(milimetro:number): number {
    return milimetro / 10;
  }
}
