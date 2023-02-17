import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploadWithTableComponent} from './file-upload-with-table.component';
import {DynamicTableModule} from '../dynamic-table/dynamic-table.module';
import {FileUploadModule} from '../file-upload/file-upload.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    FileUploadWithTableComponent
  ],
  imports: [
    CommonModule,
    DynamicTableModule,
    FileUploadModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    FileUploadWithTableComponent
  ]
})
export class FileUploadWithTableModule {
}
