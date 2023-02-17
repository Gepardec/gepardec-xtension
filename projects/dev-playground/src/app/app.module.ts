import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavigationModule} from './navigation/navigation.module';
import {DYNAMIC_TABLE_DEFAULT_CONFIG, DynamicTableConfig} from "ngx-gepardec-mat";

export const TABLE_CONFIG: DynamicTableConfig = {
  rowColor: '#ffe29d',
  dateFormat: 'yyyy/MM/dd',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NavigationModule
  ],
  providers: [{provide: DYNAMIC_TABLE_DEFAULT_CONFIG, useValue: TABLE_CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
