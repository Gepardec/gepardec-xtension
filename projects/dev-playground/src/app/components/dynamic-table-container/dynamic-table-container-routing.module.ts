import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DynamicTableContainerComponent} from './dynamic-table-container.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicTableContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicTableContainerRoutingModule { }
