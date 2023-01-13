import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import {FileUploadComponent} from './file-upload.component';
import {AngularMaterialModule} from '../../angular-material.module';


@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    AngularMaterialModule
  ]
})
export class FileUploadModule { }
