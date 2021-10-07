import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metroParaCentimetro'
})
export class MetroParaCentimetroPipe implements PipeTransform {

  transform(metro:number): number {
    let metroParaCm = 100;

    return metro * metroParaCm;
  }

}
