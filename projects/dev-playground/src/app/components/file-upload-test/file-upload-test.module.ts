import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadTestRoutingModule } from './file-upload-test-routing.module';
import {FileUploadModule} from '../../../../../ngx-gepardec-mat/src/lib/components/file-upload/file-upload.module';
import {FileUploadTestComponent} from './file-upload-test.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgxFilesizeModule} from 'ngx-filesize';


@NgModule({
  declarations: [
    FileUploadTestComponent
  ],
  imports: [
    CommonModule,
    FileUploadTestRoutingModule,
    FileUploadModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    NgxFilesizeModule
  ]
})
export class FileUploadTestModule { }
