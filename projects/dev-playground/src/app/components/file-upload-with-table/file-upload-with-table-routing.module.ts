import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FileUploadWithTableComponent} from "./file-upload-with-table.component";

const routes: Routes = [
  {path: '', component: FileUploadWithTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadWithTableRoutingModule { }
