import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadWithTableRoutingModule } from './file-upload-with-table-routing.module';
import { FileUploadWithTableComponent } from './file-upload-with-table.component';
import {
  DynamicTableModule
} from '../../../../../ngx-gepardec-mat/src/lib/components/dynamic-table/dynamic-table.module';
import {FileUploadModule} from '../../../../../ngx-gepardec-mat/src/lib/components/file-upload/file-upload.module';


@NgModule({
  declarations: [
    FileUploadWithTableComponent
  ],
  imports: [
    CommonModule,
    FileUploadWithTableRoutingModule,
    FileUploadModule,
    DynamicTableModule
  ]
})
export class FileUploadWithTableModule { }
