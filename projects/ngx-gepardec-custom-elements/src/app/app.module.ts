import {DoBootstrap, Injector, NgModule, Type} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CustomElementsBase} from './base/CustomElementsBase';
import {createCustomElement} from '@angular/elements';
import {
  InlineTextEditorComponent
} from '../../../ngx-gepardec-mat/src/lib/components/inline-text-editor/inline-text-editor.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../../../dev-playground/src/app/app-routing.module';
import {NavigationModule} from '../../../dev-playground/src/app/navigation/navigation.module';
import {
  InlineTextEditorModule
} from '../../../ngx-gepardec-mat/src/lib/components/inline-text-editor/inline-text-editor.module';
import {DynamicTableModule} from '../../../ngx-gepardec-mat/src/lib/components/dynamic-table/dynamic-table.module';
import {FileUploadModule} from '../../../ngx-gepardec-mat/src/lib/components/file-upload/file-upload.module';
import {
  FileUploadDynamicTableModule
} from '../../../dev-playground/src/app/components/file-upload-dynamic-table/file-upload-dynamic-table.module';
import {
  ExpandableDynamicTableModule
} from '../../../ngx-gepardec-mat/src/lib/components/expandable-dynamic-table/expandable-dynamic-table.module';
import {
  DynamicTableComponent
} from '../../../ngx-gepardec-mat/src/lib/components/dynamic-table/dynamic-table.component';
import {FileUploadComponent} from '../../../ngx-gepardec-mat/src/lib/components/file-upload/file-upload.component';
import {
  FileUploadDynamicTableComponent
} from '../../../dev-playground/src/app/components/file-upload-dynamic-table/file-upload-dynamic-table.component';
import {
  ExpandableDynamicTableComponent
} from '../../../ngx-gepardec-mat/src/lib/components/expandable-dynamic-table/expandable-dynamic-table.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavigationModule,
    DynamicTableModule,
    InlineTextEditorModule,
    FileUploadModule,
    FileUploadDynamicTableModule,
    ExpandableDynamicTableModule
  ],
  providers: []
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    this.createAndDefineCustomElement('gpx-dynamic-table', DynamicTableComponent);
    this.createAndDefineCustomElement('gpx-inline-text-editor', InlineTextEditorComponent);
    this.createAndDefineCustomElement('gpx-file-upload', FileUploadComponent);
    this.createAndDefineCustomElement('gpx-file-upload-dynamic-table', FileUploadDynamicTableComponent);
    this.createAndDefineCustomElement('gpx-expandable-dynamic-table', ExpandableDynamicTableComponent);
  }

  createAndDefineCustomElement(selector: string, component: Type<CustomElementsBase>) {
    const element = createCustomElement<CustomElementsBase>(component, {
      injector: this.injector
    })
    customElements.define(selector, element);
  }
}
