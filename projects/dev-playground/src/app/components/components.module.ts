import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InlineTextEditorTestModule} from './inline-text-editor-test/inline-text-editor-test.module';
import {DynamicTableShowcaseModule} from './dynamic-table-showcase/dynamic-table-showcase.module';
import {FileUploadModule} from 'ngx-gepardec-mat';


@NgModule({
  imports: [
    CommonModule,
    InlineTextEditorTestModule,
    DynamicTableShowcaseModule,
    FileUploadModule,
  ]
})
export class ComponentsModule {
}
