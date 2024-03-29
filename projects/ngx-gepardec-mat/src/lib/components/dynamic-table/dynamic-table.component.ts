import {
  AfterViewInit,
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
import {ColumnSpec} from './column-spec';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DynamicTableConfig} from './DynamicTableConfig';
import * as moment from 'moment';
import {Moment} from 'moment';
import {CustomColumnDirective} from './custom-column.directive';

export function DYNAMIC_TABLE_DEFAULT_CONFIG_FACTORY(): DynamicTableConfig {
  return {
    rowColor: '#dedede',
    dateFormat: 'dd.MM.yyyy HH:mm',
    pageSizeOptions: [10, 20, 50, 100]
  };
}

export const DYNAMIC_TABLE_DEFAULT_CONFIG = new InjectionToken<DynamicTableConfig>(
  'gpx-dynamic-table-default-config',
  {
    providedIn: 'root',
    factory: DYNAMIC_TABLE_DEFAULT_CONFIG_FACTORY,
  },
);

export interface ViewContext<T> {
  $implicit: T;
  index: number;
}

@Component({
  selector: 'gpx-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent<T> implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<T>();

  @Input() set data(data: T[]) {
    this.dataSource.data = data;
  }

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  @ViewChild(MatSort) set sort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  @Input() columnSpecs!: ColumnSpec<T>[];
  @Input() disablePaginator?: boolean;
  @Input() columnsExcludedFromSort: (Extract<keyof T | string, string>)[] = [];

  @Input() set dateFormat(format: string) {
    this._dateFormat = format;
  }

  @Input() set rowColor(color: `#${string}` | string) {
    this._rowColor = color;
  }

  @Input() set pageSizeOptions(pageSizeOptions: number[]) {
    this._pageSizeOptions = pageSizeOptions;
    if (pageSizeOptions.length > 0) {
      this._pageSize = pageSizeOptions[0];
    }
  }

  /*Internal fields*/
  _rowColor!: `#${string}` | string
  _dateFormat!: string
  _pageSizeOptions!: number[];
  _pageSize!: number;

  @ContentChildren(CustomColumnDirective) templateRefs: QueryList<CustomColumnDirective> = new QueryList<CustomColumnDirective>();

  public GPX_PREFIX = 'gpx-column-';

  constructor(protected elementRef: ElementRef, @Inject(DYNAMIC_TABLE_DEFAULT_CONFIG) tableConfig: DynamicTableConfig) {
    // merge default config with custom config
    tableConfig = {
      ...DYNAMIC_TABLE_DEFAULT_CONFIG_FACTORY(),
      ...tableConfig
    }

    if (tableConfig) {
      if (tableConfig.rowColor) {
        this._rowColor = tableConfig.rowColor;
      }

      if (tableConfig.dateFormat) {
        this._dateFormat = tableConfig.dateFormat;
      }

      if (tableConfig.pageSizeOptions) {
        this._pageSizeOptions = tableConfig.pageSizeOptions;
        this._pageSize = this._pageSizeOptions[0];
      }
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.updateColorInCss();
  }

  isSerializedDate(value: any): boolean {
    return value instanceof Date;
  }

  isMoment(value: Moment): boolean {
    return moment.isMoment(value);
  }

  getDisplayedColumns(): string[] {
    return this.columnSpecs.map(columSpec => columSpec.displayedColumn)
  }

  isColumnSorted(columnName: Extract<keyof T | string, string>): boolean {
    return !this.columnsExcludedFromSort.includes(columnName);
  }

  updateColorInCss() {
    this.elementRef.nativeElement.style.setProperty('--rowColor', this._rowColor);
  }

  isInjected(columnName: Extract<keyof T | string, string>): boolean {
    return !!this.templateRefs.find(directive => directive.columnName === columnName);
  }

  getViewContext(element: T, index: number): ViewContext<T> {
    return {
      $implicit: element,
      index
    }
  }

  getInjectedTemplateRef(columnName: Extract<keyof T | string, string>): TemplateRef<any> | null {
    const find = this.templateRefs.find(directive => directive.columnName === columnName);
    return find ? find.templateRef : null;
  }
}
