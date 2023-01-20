import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[gpxExpansionMarker]'
})
export class ExpansionMarkerDirective {

  constructor(public templateRef: TemplateRef<any>) {
  }

}
