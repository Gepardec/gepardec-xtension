import {Route} from '@angular/router';
import {TabNavigationComponent} from './tab-navigation/tab-navigation.component';


export const NAVIGATION_ROUTING: Route = {
  path: '',
  component: TabNavigationComponent,
  children: [
    {
      path: 'counter',
      loadChildren: () => import('../components/counter/counter.module').then(m => m.CounterModule)
    },
    {
      path: 'frontend-frameworks',
      loadChildren: () => import('../components/frontend-frameworks/frontend-frameworks.module').then(m => m.FrontendFrameworksModule)
    },
    {
      path: 'dynamic-table-container',
      loadChildren: () => import('../components/dynamic-table-container/dynamic-table-container.module').then(m => m.DynamicTableContainerModule)
    },
  ]
};
