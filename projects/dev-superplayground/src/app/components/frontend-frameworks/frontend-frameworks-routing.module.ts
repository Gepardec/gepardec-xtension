import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontendFrameworksComponent} from './frontend-frameworks.component';

const routes: Routes = [
  {path: '', component: FrontendFrameworksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendFrameworksRoutingModule {
}
