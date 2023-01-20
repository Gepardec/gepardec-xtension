import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InlineTextEditorTestModule} from './inline-text-editor-test/inline-text-editor-test.module';
import {DynamicTableShowcaseModule} from './dynamic-table-showcase/dynamic-table-showcase.module';
import {FileUploadModule} from 'ngx-gepardec-mat';
import {FileUploadDynamicTableModule} from './file-upload-dynamic-table/file-upload-dynamic-table.module';


@NgModule({
  imports: [
    CommonModule,
    InlineTextEditorTestModule,
    DynamicTableShowcaseModule,
    FileUploadModule,
    FileUploadDynamicTableModule
  ]
})
export class ComponentsModule {
}
