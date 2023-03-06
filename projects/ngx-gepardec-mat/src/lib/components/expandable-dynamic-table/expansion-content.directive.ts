import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[gpxExpansionContent]'
})
export class ExpansionContentDirective {

  constructor(public templateRef: TemplateRef<any>) {
  }

}
