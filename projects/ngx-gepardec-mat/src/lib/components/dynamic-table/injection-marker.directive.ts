import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[gpxInjectionMarker]'
})
export class InjectionMarkerDirective {

  @Input('gpxInjectionMarker') columnName: string;

  constructor(public templateRef: TemplateRef<any>) {
  }

}
