import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadWithTableComponent } from './file-upload-with-table.component';
import {DynamicTableModule} from "../dynamic-table/dynamic-table.module";
import {FileUploadModule} from "../file-upload/file-upload.module";



@NgModule({
  declarations: [
    FileUploadWithTableComponent
  ],
  imports: [
    CommonModule,
    DynamicTableModule,
    FileUploadModule
  ],
  exports: [
    FileUploadWithTableComponent
  ]
})
export class FileUploadWithTableModule { }
