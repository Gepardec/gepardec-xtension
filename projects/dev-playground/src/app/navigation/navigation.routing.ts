import {Route} from '@angular/router';
import {TabNavigationComponent} from './tab-navigation/tab-navigation.component';


export const NAVIGATION_ROUTING: Route = {
  path: '',
  component: TabNavigationComponent,
  children: [
    {
      path: 'inline-text-editor',
      loadChildren: () => import('../components/inline-text-editor-test/inline-text-editor-test.module').then(m => m.InlineTextEditorTestModule)
    },
    {
      path: 'dynamic-table-showcase',
      loadChildren: () => import('../components/dynamic-table-showcase/dynamic-table-showcase.module').then(m => m.DynamicTableShowcaseModule)
    },
    {
      path: 'file-upload',
      loadChildren: () => import('../components/file-upload-test/file-upload-test.module').then(m => m.FileUploadTestModule)
    },
    {
      path: 'expandable-dynamic-table',
      loadChildren: () => import('../components/expandable-dynamic-table-test/expandable-dynamic-table-test.module').then(m => m.ExpandableDynamicTableTestModule)
    }
  ]
};
