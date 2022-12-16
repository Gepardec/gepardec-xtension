import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ColumnSpec} from "./column-spec";
import {MatPaginator} from '@angular/material/paginator';

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

  @Input() columnSpecs!: ColumnSpec[];
  @Input() disablePaginator?: boolean;

  ngOnInit(): void {
  }


  getDisplayedColumns(): string[] {
    return this.columnSpecs.map(columSpec => columSpec.displayedColumn)
  }

}
