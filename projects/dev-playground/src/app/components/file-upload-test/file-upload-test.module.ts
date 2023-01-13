import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadTestRoutingModule } from './file-upload-test-routing.module';
import {FileUploadModule} from '../../../../../ngx-gepardec-mat/src/lib/components/file-upload/file-upload.module';
import {FileUploadTestComponent} from './file-upload-test.component';


@NgModule({
  declarations: [
    FileUploadTestComponent
  ],
  imports: [
    CommonModule,
    FileUploadTestRoutingModule,
    FileUploadModule
  ]
})
export class FileUploadTestModule { }
