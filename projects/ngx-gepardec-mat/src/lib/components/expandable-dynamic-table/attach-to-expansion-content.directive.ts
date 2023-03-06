import {Directive, Input, TemplateRef} from '@angular/core';

export type Position = 'before' | 'after';

@Directive({
  selector: '[gpxAttachToExpansionContent]'
})
export class AttachToExpansionContentDirective {

  @Input('gpxAttachToExpansionContent') position?: Position = 'after'

  constructor(public templateRef: TemplateRef<any>) {
  }

}
