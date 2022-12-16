import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicTableShowcaseComponent} from './dynamic-table-showcase.component';
import {DynamicTableShowcaseRoutingModule} from './dynamic-table-showcase-routing.module';


@NgModule({
  declarations: [
    DynamicTableShowcaseComponent
  ],
  imports: [
    CommonModule,
    DynamicTableShowcaseRoutingModule
  ]
})
export class DynamicTableShowcaseModule {
}
