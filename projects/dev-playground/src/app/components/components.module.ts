import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InlineTextEditorTestModule} from './inline-text-editor-test/inline-text-editor-test.module';
import {DynamicTableTestModule} from './dynamic-table-test/dynamic-table-test.module';
import {ExpandableDynamicTableTestModule} from './expandable-dynamic-table-test/expandable-dynamic-table-test.module';
import {FileUploadWithTableTestModule} from './file-upload-with-table-test/file-upload-with-table-test.module';
import {FileUploadTestModule} from './file-upload-test/file-upload-test.module';


@NgModule({
  imports: [
    CommonModule,
    DynamicTableTestModule,
    ExpandableDynamicTableTestModule,
    InlineTextEditorTestModule,
    FileUploadTestModule,
    FileUploadWithTableTestModule
  ]
})
export class ComponentsModule {
}
