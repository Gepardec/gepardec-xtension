import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpandableDynamicTableComponent} from './expandable-dynamic-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ExpansionContentDirective} from './expansion-content.directive';
import {AttachToExpansionContentDirective} from './attach-to-expansion-content.directive';
import {DynamicTableModule} from '../dynamic-table/dynamic-table.module';


@NgModule({
  declarations: [
    ExpandableDynamicTableComponent,
    ExpansionContentDirective,
    AttachToExpansionContentDirective
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    DynamicTableModule
  ],
  exports: [
    ExpandableDynamicTableComponent,
    ExpansionContentDirective,
    AttachToExpansionContentDirective,
    DynamicTableModule
  ]
})
export class ExpandableDynamicTableModule {
}
