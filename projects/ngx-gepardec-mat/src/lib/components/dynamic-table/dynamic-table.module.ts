import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicTableComponent} from './dynamic-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {TranslateModule} from '@ngx-translate/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {InjectionMarkerDirective} from './injection-marker.directive';


@NgModule({
  declarations: [
    DynamicTableComponent,
    InjectionMarkerDirective
  ],
  exports: [
    DynamicTableComponent,
    InjectionMarkerDirective
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    TranslateModule,
    MatPaginatorModule,
    MatIconModule
  ]
})
export class DynamicTableModule {
}
