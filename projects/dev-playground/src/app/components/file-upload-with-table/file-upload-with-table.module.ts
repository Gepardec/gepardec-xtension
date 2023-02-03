import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadWithTableRoutingModule } from './file-upload-with-table-routing.module';
import { FileUploadWithTableComponent } from './file-upload-with-table.component';
import {FileUploadModule} from "ngx-gepardec-mat";


@NgModule({
  declarations: [
    FileUploadWithTableComponent
  ],
  imports: [
    CommonModule,
    FileUploadWithTableRoutingModule,
    FileUploadModule
  ]
})
export class FileUploadWithTableModule { }
