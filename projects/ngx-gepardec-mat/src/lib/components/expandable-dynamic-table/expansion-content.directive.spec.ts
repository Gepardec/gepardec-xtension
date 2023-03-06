import {ExpansionContentDirective} from './expansion-content.directive';
import {TemplateRef} from '@angular/core';

describe('ExpansionContentDirective', () => {
  it('should create an instance', () => {
    const directive = new ExpansionContentDirective({} as TemplateRef<any>);
    expect(directive).toBeTruthy();
  });
});
