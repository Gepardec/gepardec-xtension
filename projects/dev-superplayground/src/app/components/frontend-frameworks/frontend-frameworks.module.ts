import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FrontendFrameworksRoutingModule} from './frontend-frameworks-routing.module';
import {FrontendFrameworksComponent} from './frontend-frameworks.component';
import {FrontendFrameworkComponent} from './frontend-framework/frontend-framework.component';


@NgModule({
  declarations: [
    FrontendFrameworksComponent,
    FrontendFrameworkComponent],
  imports: [
    CommonModule,
    FrontendFrameworksRoutingModule
  ]
})
export class FrontendFrameworksModule {
}
