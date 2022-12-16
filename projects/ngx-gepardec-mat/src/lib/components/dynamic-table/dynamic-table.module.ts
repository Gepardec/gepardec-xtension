import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicTableComponent} from './dynamic-table.component';
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    DynamicTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    DynamicTableComponent
  ]
})
export class DynamicTableModule {
}
