import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicTableTestComponent} from './dynamic-table-test.component';
import {DynamicTableTestRoutingModule} from './dynamic-table-test-routing.module';
import {DynamicTableModule} from 'ngx-gepardec-mat';


@NgModule({
  declarations: [
    DynamicTableTestComponent
  ],
  imports: [
    CommonModule,
    DynamicTableTestRoutingModule,
    DynamicTableModule
  ]
})
export class DynamicTableTestModule {
}
