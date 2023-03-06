import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicTableComponent} from './dynamic-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {CustomColumnDirective} from './custom-column.directive';


@NgModule({
  declarations: [
    DynamicTableComponent,
    CustomColumnDirective
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    DynamicTableComponent,
    CustomColumnDirective
  ]
})
export class DynamicTableModule {
}
