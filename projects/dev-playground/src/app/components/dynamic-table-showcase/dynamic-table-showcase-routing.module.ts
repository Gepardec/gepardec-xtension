import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DynamicTableShowcaseComponent} from './dynamic-table-showcase.component';

const routes: Routes = [
  {path: '', component: DynamicTableShowcaseComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DynamicTableShowcaseRoutingModule {
}
