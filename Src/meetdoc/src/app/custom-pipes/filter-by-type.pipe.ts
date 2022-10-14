import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {

  transform(items: any, sel?: any): any {
    console.log(sel)
    if (!items) return null;
    if(!sel) return items;
    if(sel ==='All') return items;
    return !sel ? items : items.filter(function (sal: any) {
      console.log(sal.appointmentType.name +"==" + sel)
      return sal.appointmentType.name === sel
    });
  }

}
