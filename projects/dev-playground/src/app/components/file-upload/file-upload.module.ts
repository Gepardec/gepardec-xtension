import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import {FileUploadComponent} from './file-upload.component';
import {AngularMaterialModule} from '../../angular-material.module';
import {DropzoneDirective} from './drop-zone.directive';


@NgModule({
  declarations: [
    FileUploadComponent,
    DropzoneDirective
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    AngularMaterialModule
  ]
})
export class FileUploadModule { }
