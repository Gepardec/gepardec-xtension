import {AfterContentInit, Component, ElementRef, Inject, InjectionToken, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ColumnSpec} from "./column-spec";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from "@angular/material/sort";
import {DynamicTableConfig} from "./DynamicTableConfig";

export function DYNAMIC_TABLE_DEFAULT_CONFIG_FACTORY(): DynamicTableConfig {
  return {
    rowColour: '#dedede',
  };
}

export const DYNAMIC_TABLE_DEFAULT_CONFIG = new InjectionToken<DynamicTableConfig>(
  'gpx-dynamic-table-default-config',
  {
    providedIn: 'root',
    factory: DYNAMIC_TABLE_DEFAULT_CONFIG_FACTORY,
  },
);


@Component({
  selector: 'gpx-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent<T> implements OnInit, AfterContentInit {

  private readonly DATE_REGEX = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}\+\d{2}:\d{2}/;
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
  @Input() columnsExcludedFromSort: (Extract<keyof T, string>)[] = [];

  @Input() set rowColour(colour: `#${string}` | string) {
    this._rowColour = colour;
  }

  _rowColour!: `#${string}` | string

  constructor(protected elementRef: ElementRef, @Inject(DYNAMIC_TABLE_DEFAULT_CONFIG) tableConfig: DynamicTableConfig) {

    if (tableConfig && tableConfig.rowColour) {
       this._rowColour = tableConfig.rowColour;
    }
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.updateColourInCss();
  }

  isSerializedDate(value: string): boolean {
    return this.DATE_REGEX.test(value);
  }

  getDisplayedColumns(): string[] {
    return this.columnSpecs.map(columSpec => columSpec.displayedColumn)
  }

  isColumnSorted(singleColumn: Extract<keyof T, string>): boolean {
    return !this.columnsExcludedFromSort.includes(singleColumn);
  }

  updateColourInCss() {
    this.elementRef.nativeElement.style.setProperty('--rowCol', this._rowColour)
  }
}
