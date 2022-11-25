import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DynamicTableContainerRoutingModule} from './dynamic-table-container-routing.module';
import {DynamicTableContainerComponent} from './dynamic-table-container.component';


@NgModule({
  declarations: [
    DynamicTableContainerComponent
  ],
  imports: [
    CommonModule,
    DynamicTableContainerRoutingModule,
  ]
})
export class DynamicTableContainerModule {
}
