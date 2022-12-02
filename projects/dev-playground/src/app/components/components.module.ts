import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterModule} from './counter/counter.module';
import {FrontendFrameworksModule} from './frontend-frameworks/frontend-frameworks.module';
import {DynamicTableContainerModule} from './dynamic-table-container/dynamic-table-container.module';
import {InlineTextEditorTestModule} from './inline-text-editor-test/inline-text-editor-test.module';


@NgModule({
  imports: [
    CommonModule,
    CounterModule,
    FrontendFrameworksModule,
    DynamicTableContainerModule,
    InlineTextEditorTestModule
  ]
})
export class ComponentsModule {
}
