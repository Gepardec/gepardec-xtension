import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ColumnSpec} from 'ngx-gepardec-mat';

@Component({
  selector: 'app-file-upload-test',
  templateUrl: './file-upload-test.component.html',
  styleUrls: ['./file-upload-test.component.scss']
})
export class FileUploadTestComponent {

  dataSource: Array<Employee> = EMPLOYEES;
  columnsToDisplay = ['name', 'changeDate', 'file'];
  columnSpecs: ColumnSpec<Employee>[] = [
    {
      displayedColumn: 'name',
      header: 'Name'
    },
    {
      displayedColumn: 'changeDate',
      header: 'Änderungsdatum'
    },
    {
      displayedColumn: 'file',
      header: 'Dateien'
    }
  ];

  columnSpecsUploadedTable: ColumnSpec<File>[] = [
    {
      displayedColumn: 'name',
      header: 'Dateiname'
    },
    {
      displayedColumn: 'webkitRelativePath',
      header: 'Relativer Pfad'
    },
    {
      displayedColumn: 'lastModified',
      header: 'Zuletzt geändert'
    },
    {
      displayedColumn: 'size',
      header: 'Größe'
    },
    {
      displayedColumn: 'type',
      header: 'Typ'
    }
  ];

  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: File | null;
  maxSize: number = 3;

  constructor(private snackbar: MatSnackBar) {
  }

  filesUploaded(index: number, files: Array<File>) {
    this.dataSource[index].files = files;
  }

  maxNumberOfFilesExceeded(files: Array<File>): void {
    this.snackbar.open(`Cannot upload more than ${this.maxSize} files. You uploaded ${files.length} files.`)
  }

  buildTitle(files: Array<File>) {
    let title = '';
    title = files.length + ' Dateien hochgeladen.';
    if (files.length === 1) {
      title = files.length + ' Datei hochgeladen.';
    }

    return title;
  }

  asEmployee(employee: Employee): Employee {
    return employee;
  }
}

export interface Employee {
  id: number;
  name: string;
  changeDate: Date;
  files: Array<File>;
}

const EMPLOYEES: Array<Employee> = [
  {
    id: 0,
    name: 'Christoph Ruhsam',
    changeDate: new Date(),
    files: []
  },
  {
    id: 1,
    name: 'Marcel Reiter',
    changeDate: new Date(),
    files: []
  },
  {
    id: 2,
    name: 'Oliver Tod',
    changeDate: new Date(),
    files: []
  }
]
