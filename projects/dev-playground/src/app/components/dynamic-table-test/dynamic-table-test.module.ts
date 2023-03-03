import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicTableTestComponent} from './dynamic-table-test.component';
import {DynamicTableTestRoutingModule} from './dynamic-table-test-routing.module';
import {DYNAMIC_TABLE_DEFAULT_CONFIG, DynamicTableConfig, DynamicTableModule} from 'ngx-gepardec-mat';
import {MatCardModule} from '@angular/material/card';

const tableConfig: DynamicTableConfig = {
  rowColor: 'lightblue',
  dateFormat: 'dd.MM.yyyy',
  pageSizeOptions: [20, 40, 60, 80, 100]
}

@NgModule({
  declarations: [
    DynamicTableTestComponent
  ],
  imports: [
    CommonModule,
    DynamicTableTestRoutingModule,
    DynamicTableModule,
    MatCardModule
  ],
  providers: [
    {
      provide: DYNAMIC_TABLE_DEFAULT_CONFIG,
      useValue: tableConfig
    }
  ]
})
export class DynamicTableTestModule {
}
