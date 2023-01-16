import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicTableComponent} from './dynamic-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {InjectionMarkerDirective} from './injection-marker.directive';


@NgModule({
  declarations: [
    DynamicTableComponent,
    InjectionMarkerDirective
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    DynamicTableComponent,
    InjectionMarkerDirective
  ]
})
export class DynamicTableModule {
}
