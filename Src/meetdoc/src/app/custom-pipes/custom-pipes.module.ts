import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { FilterByDatePipe } from './filter-by-date.pipe';
import { FilterByTypePipe } from './filter-by-type.pipe';



@NgModule({
  declarations: [
    SearchPipe,
    FilterByDatePipe,
    FilterByTypePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchPipe,
    FilterByDatePipe,
    FilterByTypePipe,
  ]
})
export class CustomPipesModule { }
