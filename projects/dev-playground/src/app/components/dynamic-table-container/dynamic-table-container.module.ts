import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DynamicTableContainerRoutingModule} from './dynamic-table-container-routing.module';
import {DynamicTableContainerComponent} from './dynamic-table-container.component';
import {DynamicTableModule} from 'ngx-gepardec-mat';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    DynamicTableContainerComponent
  ],
  imports: [
    CommonModule,
    DynamicTableContainerRoutingModule,
    DynamicTableModule,
    TranslateModule.forRoot()
  ]
})
export class DynamicTableContainerModule {
}
