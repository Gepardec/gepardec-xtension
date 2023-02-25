import {Route} from '@angular/router';
import {TabNavigationComponent} from './tab-navigation/tab-navigation.component';


export const NAVIGATION_ROUTING: Route = {
  path: '',
  component: TabNavigationComponent,
  children: [
    {
      path: 'dynamic-table',
      loadChildren: () => import('../components/dynamic-table-test/dynamic-table-test.module').then(m => m.DynamicTableTestModule)
    },
    {
      path: 'expandable-dynamic-table',
      loadChildren: () => import('../components/expandable-dynamic-table-test/expandable-dynamic-table-test.module').then(m => m.ExpandableDynamicTableTestModule)
    },
    {
      path: 'inline-text-editor',
      loadChildren: () => import('../components/inline-text-editor-test/inline-text-editor-test.module').then(m => m.InlineTextEditorTestModule)
    },
    {
      path: 'file-upload',
      loadChildren: () => import('../components/file-upload-test/file-upload-test.module').then(m => m.FileUploadTestModule)
    },
    {
      path: 'file-upload-with-table',
      loadChildren: () => import('../components/file-upload-with-table-test/file-upload-with-table-test.module').then(m => m.FileUploadWithTableTestModule)
    }
  ]
};
