import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InlineTextEditorComponent} from './inline-text-editor.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import {NgxGepardecMatModule} from '../../ngx-gepardec-mat.module';
import {EditorFormFieldComponent} from './editor-form-field/editor-form-field.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    InlineTextEditorComponent,
    EditorFormFieldComponent
  ],
  imports: [
    CommonModule,
    NgxGepardecMatModule,
    TextFieldModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  exports: [
    InlineTextEditorComponent,
    EditorFormFieldComponent
  ]
})
export class InlineTextEditorModule {
}
