import {DoBootstrap, Injector, NgModule, Type} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CustomElementsBase} from './base/CustomElementsBase';
import {createCustomElement} from '@angular/elements';
import {
  InlineTextEditorComponent
} from '../../../ngx-gepardec-mat/src/lib/components/inline-text-editor/inline-text-editor.component';
import {AngularMaterialModule} from '../../../dev-playground/src/app/angular-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../../../dev-playground/src/app/app-routing.module';
import {NavigationModule} from '../../../dev-playground/src/app/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavigationModule,
    AngularMaterialModule
  ],
  providers: []
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    this.createAndDefineCustomElement('gpx-inline-text-editor', InlineTextEditorComponent);
  }

  createAndDefineCustomElement(selector: string, component: Type<CustomElementsBase>) {
    const element = createCustomElement<CustomElementsBase>(component, {
      injector: this.injector
    })
    customElements.define(selector, element);
  }
}
