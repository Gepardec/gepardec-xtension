import {CustomColumnDirective} from './custom-column.directive';
import {TemplateRef} from '@angular/core';

describe('CustomColumnDirective', () => {
  it('should create an instance', () => {
    const directive = new CustomColumnDirective({} as TemplateRef<any>);
    expect(directive).toBeTruthy();
  });
});
