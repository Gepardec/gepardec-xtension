import {ExpansionMarkerDirective} from './expansion-marker.directive';
import {TemplateRef} from '@angular/core';

describe('ExpansionMarkerDirective', () => {
  it('should create an instance', () => {
    const directive = new ExpansionMarkerDirective({} as TemplateRef<any>);
    expect(directive).toBeTruthy();
  });
});
