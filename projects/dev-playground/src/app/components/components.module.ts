import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterModule} from './counter/counter.module';
import {FrontendFrameworksModule} from './frontend-frameworks/frontend-frameworks.module';
import {InlineTextEditorTestModule} from './inline-text-editor-test/inline-text-editor-test.module';
import {FileUploadModule} from './file-upload/file-upload.module';


@NgModule({
  imports: [
    CommonModule,
    CounterModule,
    FrontendFrameworksModule,
    InlineTextEditorTestModule,
    FileUploadModule
  ]
})
export class ComponentsModule {
}
