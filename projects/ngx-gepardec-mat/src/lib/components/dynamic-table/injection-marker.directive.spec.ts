import {InjectionMarkerDirective} from './injection-marker.directive';
import {TemplateRef} from '@angular/core';

describe('InjectionMarkerDirective', () => {
  it('should create an instance', () => {
    const directive = new InjectionMarkerDirective({} as TemplateRef<any>);
    expect(directive).toBeTruthy();
  });
});
