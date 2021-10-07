import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meterToKilometer'
})
export class MeterToKilometerPipe implements PipeTransform {

  transform(metro:number): number {
    return metro / 1000;
  }

}
