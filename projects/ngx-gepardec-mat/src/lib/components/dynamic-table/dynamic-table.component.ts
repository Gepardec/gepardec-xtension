import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ColumnSpec} from "./column-spec";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'gpx-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent<T> implements OnInit {

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

  ngOnInit(): void {
  }


  getDisplayedColumns(): string[] {
    return this.columnSpecs.map(columSpec => columSpec.displayedColumn)
  }

  isColumnSorted(singleColumn: Extract<keyof T, string>): boolean {
    return !this.columnsExcludedFromSort.includes(singleColumn);
  }


}
