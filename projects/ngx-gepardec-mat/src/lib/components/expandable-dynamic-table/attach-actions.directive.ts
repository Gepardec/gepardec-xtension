import {Directive, Input, TemplateRef} from '@angular/core';

export type Position = 'before' | 'after';

@Directive({
  selector: '[gpxAttachActions]'
})
export class AttachActionsDirective {

  @Input('gpxAttachActions') position?: Position = 'after'

  constructor(public templateRef: TemplateRef<any>) {
  }

}
