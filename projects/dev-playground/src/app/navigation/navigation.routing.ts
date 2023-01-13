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
      path: 'inline-text-editor',
      loadChildren: () => import('../components/inline-text-editor-test/inline-text-editor-test.module').then(m => m.InlineTextEditorTestModule)
    },
    {
      path: 'file-upload',
      loadChildren: () => import('../components/file-upload-test/file-upload-test.module').then(m => m.FileUploadTestModule)
    }
  ]
};
