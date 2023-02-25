import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DynamicTableTestComponent} from './dynamic-table-test.component';

const routes: Routes = [
  {path: '', component: DynamicTableTestComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DynamicTableTestRoutingModule {
}
