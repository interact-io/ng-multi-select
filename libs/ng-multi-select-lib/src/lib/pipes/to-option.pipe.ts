import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toOption'
})
export class ToOptionPipe implements PipeTransform {

  transform(object: Object, objectFieldToShow: string) {
    let result = null;
    if (object && Object.keys(object).includes(objectFieldToShow)) {
      result = object[objectFieldToShow];
    }
    return result;
  }
}
