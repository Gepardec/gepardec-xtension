import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpandableDynamicTableComponent} from './expandable-dynamic-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ExpansionMarkerDirective} from './expansion-marker.directive';


@NgModule({
  declarations: [
    ExpandableDynamicTableComponent,
    ExpansionMarkerDirective
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ExpandableDynamicTableComponent,
    ExpansionMarkerDirective
  ]
})
export class ExpandableDynamicTableModule {
}
