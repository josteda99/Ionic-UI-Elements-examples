import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(
    arreglo: any[],
    texto: string = '',
    columna: string = 'title',
    columna2: string = 'publisher'
  ): any[] {
    if (texto === '') {
      return arreglo;
    }
    if (!arreglo) {
      return arreglo;
    }
    texto = texto.toLowerCase();

    if (columna === 'title') {
      return arreglo.filter((item) =>
        item[columna].toLowerCase().includes(texto)
      );
    } else if (texto === 'todos') {
      return arreglo;
    } else {
      return arreglo.filter((item) =>
        item[columna2].toLowerCase().includes(texto)
      );
    }
  }
}
