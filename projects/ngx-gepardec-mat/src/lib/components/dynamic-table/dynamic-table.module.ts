import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicTableComponent} from './dynamic-table.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    DynamicTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    DynamicTableComponent
  ]
})
export class DynamicTableModule {
}
