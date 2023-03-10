import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FileUploadTestRoutingModule} from './file-upload-test-routing.module';
import {FileUploadTestComponent} from './file-upload-test.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ExpandableDynamicTableModule, FileUploadModule} from 'ngx-gepardec-mat';
import {MatCardModule} from '@angular/material/card';


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
    MatSnackBarModule,
    MatCardModule,
    ExpandableDynamicTableModule
  ]
})
export class FileUploadTestModule {
}
