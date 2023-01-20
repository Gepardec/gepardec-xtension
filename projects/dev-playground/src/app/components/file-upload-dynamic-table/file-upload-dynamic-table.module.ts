import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FileUploadDynamicTableRoutingModule} from './file-upload-dynamic-table-routing.module';
import {FileUploadDynamicTableComponent} from './file-upload-dynamic-table.component';
import {DynamicTableShowcaseRoutingModule} from '../dynamic-table-showcase/dynamic-table-showcase-routing.module';
import {DynamicTableModule, FileUploadModule} from 'ngx-gepardec-mat';


@NgModule({
  declarations: [
    FileUploadDynamicTableComponent
  ],
  imports: [
    CommonModule,
    FileUploadDynamicTableRoutingModule,
    DynamicTableShowcaseRoutingModule,
    DynamicTableModule,
    FileUploadModule
  ]
})
export class FileUploadDynamicTableModule {
}
