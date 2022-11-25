import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CounterRoutingModule} from './counter-routing.module';
import {CounterComponent} from './counter.component';
import {NgxGepardecMatModule} from 'ngx-gepardec-mat';


@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    CounterRoutingModule,
    NgxGepardecMatModule
  ]
})
export class CounterModule {
}
