import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpandableDynamicTableTestComponent} from './expandable-dynamic-table-test.component';

const routes: Routes = [
  {path: '', component: ExpandableDynamicTableTestComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExpandableDynamicTableTestRoutingModule {
}
