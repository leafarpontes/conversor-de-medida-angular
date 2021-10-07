import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centimetroParaMetro'
})
export class CentimetroParaMetroPipe implements PipeTransform {

  transform(centimetro:number): number{
    return centimetro / 100;
  }

}
