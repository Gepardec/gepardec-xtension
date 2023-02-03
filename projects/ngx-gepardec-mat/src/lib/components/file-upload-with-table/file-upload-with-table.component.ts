import { Component } from '@angular/core';
import {ColumnSpec} from "../dynamic-table/column-spec";

@Component({
  selector: 'gpx-file-upload-with-table',
  templateUrl: './file-upload-with-table.component.html',
  styleUrls: ['./file-upload-with-table.component.css']
})
export class FileUploadWithTableComponent {

  dataSource: Array<File>;

  filesUploaded(files: Array<File>) {
    this.dataSource = files;
  }

  columnSpecs: ColumnSpec<File>[] = [
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
}
