import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabNavigationComponent} from './tab-navigation/tab-navigation.component';
import {RouterModule} from '@angular/router';
import {NAVIGATION_ROUTING} from './navigation.routing';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    TabNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([NAVIGATION_ROUTING]),
    MatTabsModule
  ]
})
export class NavigationModule {
}
