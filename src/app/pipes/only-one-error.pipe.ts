import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyOneError'
})
export class OnlyOneErrorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
