import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toOption'
})
export class ToOptionPipe implements PipeTransform {

  transform(object: unknown, objectFieldToShow: string): string {
    let result = null;
    if (object && Object.keys(object).includes(objectFieldToShow)) {
      result = object[objectFieldToShow];
    }
    return result;
  }
}
