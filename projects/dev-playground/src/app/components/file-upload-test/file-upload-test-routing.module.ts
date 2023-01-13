import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FileUploadTestComponent} from './file-upload-test.component';

const routes: Routes = [
  {path: '', component: FileUploadTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadTestRoutingModule {
}
