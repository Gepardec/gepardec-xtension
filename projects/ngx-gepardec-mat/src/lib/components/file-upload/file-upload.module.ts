import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploadComponent} from './file-upload.component';
import {DropzoneDirective} from './drop-zone.directive';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    FileUploadComponent,
    DropzoneDirective
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    DropzoneDirective,
    FileUploadComponent
  ]
})
export class FileUploadModule {
}
