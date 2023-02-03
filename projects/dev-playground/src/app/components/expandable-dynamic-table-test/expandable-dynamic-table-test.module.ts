import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpandableDynamicTableTestComponent} from './expandable-dynamic-table-test.component';
import {ExpandableDynamicTableTestRoutingModule} from './expandable-dynamic-table-test-routing.module';
import {DynamicTableModule, ExpandableDynamicTableModule} from 'ngx-gepardec-mat';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ExpandableDynamicTableTestComponent
  ],
  imports: [
    CommonModule,
    ExpandableDynamicTableTestRoutingModule,
    ExpandableDynamicTableModule,
    DynamicTableModule,
    MatButtonModule
  ]
})
export class ExpandableDynamicTableTestModule {
}
