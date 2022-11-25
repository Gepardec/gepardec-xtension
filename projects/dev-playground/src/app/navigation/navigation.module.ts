import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabNavigationComponent} from './tab-navigation/tab-navigation.component';
import {AngularMaterialModule} from '../angular-material.module';
import {RouterModule} from '@angular/router';
import {NAVIGATION_ROUTING} from './navigation.routing';


@NgModule({
  declarations: [
    TabNavigationComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild([NAVIGATION_ROUTING])
  ]
})
export class NavigationModule {
}
