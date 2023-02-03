import {Component, ContentChild, ElementRef, Inject} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {DYNAMIC_TABLE_DEFAULT_CONFIG, DynamicTableComponent} from '../dynamic-table/dynamic-table.component';
import {DynamicTableConfig} from '../dynamic-table/DynamicTableConfig';
import {ExpansionMarkerDirective} from './expansion-marker.directive';
import {AttachActionsDirective} from './attach-actions.directive';

@Component({
  selector: 'gpx-expandable-dynamic-table',
  templateUrl: './expandable-dynamic-table.component.html',
  styleUrls: ['./expandable-dynamic-table.component.scss'],
  animations: [
    trigger('expandRowNgIf', [
      transition(':enter', [
        style({height: 0, opacity: 0}),
        animate('0.5s ease-out',
          style({height: '*', opacity: 1}))
      ]),
      transition(':leave', [
        style({height: '*', opacity: 1}),
        animate('0.5s ease-in',
          style({height: 0, opacity: 0}))
      ])
    ])
  ]
})
export class ExpandableDynamicTableComponent<T> extends DynamicTableComponent<T> {

  expandedItem: T | null;

  @ContentChild(ExpansionMarkerDirective) expansionMarker!: ExpansionMarkerDirective;
  @ContentChild(AttachActionsDirective) attachActions!: AttachActionsDirective;

  constructor(protected elRef: ElementRef,
              @Inject(DYNAMIC_TABLE_DEFAULT_CONFIG) protected config: DynamicTableConfig
  ) {
    super(elRef, config);
  }

  /**
   * Ensures that expandable detail row can be associated with its parent row
   */
  byIndexTracker(index: number): number {
    return index;
  }

  getDisplayedColumnsWithExpand(): string[] {
    return [
      ...super.getDisplayedColumns(),
      'expand'
    ];
  }
}
