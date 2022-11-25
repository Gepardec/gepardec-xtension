import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  Inject,
  InjectionToken,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {TranslateService} from '@ngx-translate/core';
import {Moment} from 'moment';
import {InjectionMarkerDirective} from './injection-marker.directive';
import * as moment from 'moment/moment';

export function DYNAMIC_TABLE_DEFAULT_CONFIG_FACTORY(): DynamicTableDefaultConfig {
  return {
    alternateRowColor: '#dedede',
  };
}

export const DYNAMIC_TABLE_DEFAULT_CONFIG = new InjectionToken<DynamicTableDefaultConfig>(
  'gpx-dynamic-table-default-config',
  {
    providedIn: 'root',
    factory: DYNAMIC_TABLE_DEFAULT_CONFIG_FACTORY,
  },
);

export interface DynamicTableDefaultConfig {
  alternateRowColor: `#${string}` | string;
}

export interface ViewContext<T> {
  $implicit: T;
  index: number;
}

@Component({
  selector: 'gpx-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent<T> implements OnInit, AfterContentInit {

  private readonly DATE_REGEX = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}\+\d{2}:\d{2}/;

  dataSource = new MatTableDataSource<T>();
  // @ts-ignore
  _alternateRowColor: string;

  @Input() set data(data: T[]) {
    this.dataSource.data = data;
  }

  @Input() displayedColumns!: (keyof T | string)[];
  @Input() translationPrefix!: string;
  @Input() nonSortColumns: (keyof T | string)[] = [];
  @Input() renderPaginator = true;
  @Input() renderNoDataRow = false;
  @Input() sortActive?: keyof T | string;
  @Input() sortDirection?: SortDirection;
  @Input() pageSize?: number;
  @Input() highlightRow?: (item: T) => boolean;
  @Input() sortingDataAccessor?: (item: T, sortHeaderId: string) => string | number;

  @Input() set alternateRowColor(value: `#${string}` | string) {
    this._alternateRowColor = value;
  }

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  @ViewChild(MatSort) set sort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  // @ts-ignore
  @ContentChildren(InjectionMarkerDirective) templateRefs: QueryList<InjectionMarkerDirective>;

  constructor(
    protected translateService: TranslateService,
    protected elRef: ElementRef,
    @Inject(DYNAMIC_TABLE_DEFAULT_CONFIG) protected config: DynamicTableDefaultConfig
  ) {
    if (config) {
      if (config.alternateRowColor) {
        this.alternateRowColor = config.alternateRowColor;
      }
    }
  }

  ngOnInit(): void {
    if (this.sortingDataAccessor) {
      this.dataSource.sortingDataAccessor = this.sortingDataAccessor;
    }
  }

  ngAfterContentInit(): void {
    this.updateRowColorCss();
  }

  isSerializedDate(value: string): boolean {
    return this.DATE_REGEX.test(value);
  }

  isMoment(value: Moment): boolean {
    return moment.isMoment(value);
  }

  getHeaderByColumnName(columnName: keyof T | string): string {
    // @ts-ignore
    return this.translateService.instant(this.translationPrefix + '.' + columnName);
  }

  isSortable(columnName: keyof T): boolean {
    return !this.nonSortColumns.includes(columnName);
  }

  isInjected(columnName: keyof T): boolean {
    return !!this.templateRefs.find(directive => directive.columnName === columnName);
  }

  getInjectedTemplateByColumnName(columnName: keyof T | string): TemplateRef<any> {
    // @ts-ignore
    return this.templateRefs.find(directive => directive.columnName === columnName).templateRef;
  }

  getViewContext(dataElement: T, index: number): ViewContext<T> {
    return {$implicit: dataElement, index};
  }

  private updateRowColorCss(): void {
    this.elRef.nativeElement.style.setProperty('--mat-row-background', this._alternateRowColor);
  }

  get idByTranslationPrefix(): string {
    return `${this.translationPrefix
      ? this.translationPrefix.substring(0, this.translationPrefix.includes('.')
        ? this.translationPrefix.indexOf('.')
        : this.translationPrefix.length)
      : 'result'}-table`;
  }
}
