import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InlineTextEditorTestComponent} from './inline-text-editor-test.component';

const routes: Routes = [
  {path: '', component: InlineTextEditorTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InlineTextEditorTestRoutingModule {
}
