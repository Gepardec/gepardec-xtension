import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FileUploadWithTableTestComponent} from "./file-upload-with-table-test.component";

const routes: Routes = [
  {path: '', component: FileUploadWithTableTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadWithTableRoutingTestModule { }
