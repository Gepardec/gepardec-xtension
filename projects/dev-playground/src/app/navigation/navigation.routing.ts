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
    }
  ]
};
