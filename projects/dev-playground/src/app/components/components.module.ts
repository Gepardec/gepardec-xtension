import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterModule} from './counter/counter.module';
import {FrontendFrameworksModule} from './frontend-frameworks/frontend-frameworks.module';
import {DynamicTableShowcaseModule} from './dynamic-table-showcase/dynamic-table-showcase.module';


@NgModule({
  imports: [
    CommonModule,
    CounterModule,
    FrontendFrameworksModule,
    DynamicTableShowcaseModule
  ]
})
export class ComponentsModule {
}
