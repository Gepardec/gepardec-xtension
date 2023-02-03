import {AttachActionsDirective} from './attach-actions.directive';
import {TemplateRef} from '@angular/core';

describe('AttachActionsDirective', () => {
  it('should create an instance', () => {
    const directive = new AttachActionsDirective({} as TemplateRef<any>);
    expect(directive).toBeTruthy();
  });
});
