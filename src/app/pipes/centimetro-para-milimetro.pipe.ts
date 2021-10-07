import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centimetroParaMilimetro'
})
export class CentimetroParaMilimetroPipe implements PipeTransform {

  transform(centimetro:number): number {
    return centimetro * 10;
  }
}
