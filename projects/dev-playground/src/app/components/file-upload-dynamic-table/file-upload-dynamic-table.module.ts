import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FileUploadDynamicTableRoutingModule} from './file-upload-dynamic-table-routing.module';
import {FileUploadDynamicTableComponent} from './file-upload-dynamic-table.component';


@NgModule({
  declarations: [
    FileUploadDynamicTableComponent
  ],
  imports: [
    CommonModule,
    FileUploadDynamicTableRoutingModule
  ]
})
export class FileUploadDynamicTableModule {
}
