import {Component} from '@angular/core';
import {ColumnSpec} from '../../../../../ngx-gepardec-mat/src/lib/components/dynamic-table/column-spec';
import {Employee, employees} from '../../testdata/employee.model';

@Component({
  selector: 'app-file-upload-dynamic-table',
  templateUrl: './file-upload-dynamic-table.component.html',
  styleUrls: ['./file-upload-dynamic-table.component.scss']
})
export class FileUploadDynamicTableComponent {

  data: Employee[] = employees;
  columnSpecs: ColumnSpec<Employee>[] = [
    {
      displayedColumn: 'id',
      header: 'ID'
    },
    {
      displayedColumn: 'name',
      header: 'Name'
    },
    {
      displayedColumn: 'birthDate',
      header: 'Geburtsdatum'
    },
    {
      displayedColumn: 'file-upload',
      header: 'Dateien'
    },
  ];

  filesUploaded(index: number, files: Array<File>) {
    this.data[index].files = files;
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
