import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InlineTextEditorTestComponent} from './inline-text-editor-test.component';
import {InlineTextEditorTestRoutingModule} from './inline-text-editor-test-routing.module';
import {InlineTextEditorModule} from 'ngx-gepardec-mat';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    InlineTextEditorTestComponent
  ],
  imports: [
    CommonModule,
    InlineTextEditorModule,
    InlineTextEditorTestRoutingModule,
    MatCardModule
  ]
})
export class InlineTextEditorTestModule {
}
