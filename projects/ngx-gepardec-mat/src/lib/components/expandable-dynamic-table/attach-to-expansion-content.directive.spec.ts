import {AttachToExpansionContentDirective} from './attach-to-expansion-content.directive';
import {TemplateRef} from '@angular/core';

describe('AttachToExpansionContentDirective', () => {
  it('should create an instance', () => {
    const directive = new AttachToExpansionContentDirective({} as TemplateRef<any>);
    expect(directive).toBeTruthy();
  });
});
