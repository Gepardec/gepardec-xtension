import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InlineTextEditorTestComponent} from './inline-text-editor-test.component';
import {
  InlineTextEditorModule
} from '../../../../../ngx-gepardec-mat/src/lib/components/inline-text-editor/inline-text-editor.module';
import {InlineTextEditorTestRoutingModule} from './inline-text-editor-test-routing.module';
import {AngularMaterialModule} from '../../angular-material.module';


@NgModule({
  declarations: [
    InlineTextEditorTestComponent
  ],
  imports: [
    CommonModule,
    InlineTextEditorModule,
    InlineTextEditorTestRoutingModule,
    AngularMaterialModule
  ]
})
export class InlineTextEditorTestModule {
}
