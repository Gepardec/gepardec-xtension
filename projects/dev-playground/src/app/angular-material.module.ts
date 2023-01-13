import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports: [
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class AngularMaterialModule {
}
