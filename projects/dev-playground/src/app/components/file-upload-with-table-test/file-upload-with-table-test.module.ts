import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FileUploadWithTableRoutingTestModule} from './file-upload-with-table-routing-test.module';
import {FileUploadWithTableTestComponent} from './file-upload-with-table-test.component';
import {FileUploadWithTableModule} from 'ngx-gepardec-mat';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    FileUploadWithTableTestComponent,
  ],
  imports: [
    CommonModule,
    FileUploadWithTableRoutingTestModule,
    FileUploadWithTableModule,
    MatSnackBarModule
  ]
})
export class FileUploadWithTableTestModule {
}
