import {Pipe, PipeTransform} from '@angular/core';
import {getMatIconFailedToSanitizeLiteralError} from "@angular/material/icon";

@Pipe({
  name: 'filterByDate'
})
export class FilterByDatePipe implements PipeTransform {

  transform(items: any, sel?: any): any {
    if (!items) return null;
    if(!sel) return items;
    if(sel ==='All') return items;
    return !sel ? items : items.filter(function (sal: any) {
      return sal.appointment_date === sel
    });
  }


}
