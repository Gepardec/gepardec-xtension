import {Component, Input} from '@angular/core';
import {ColumnSpec} from '../dynamic-table/column-spec';

@Component({
  selector: 'gpx-file-upload-with-table',
  templateUrl: './file-upload-with-table.component.html',
  styleUrls: ['./file-upload-with-table.component.css']
})
export class FileUploadWithTableComponent {

  dataSource: Array<File>;

  @Input() deleteFunction: (param?: any) => boolean;

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
    },
    {
      displayedColumn: 'actions',
      header: 'Aktionen'
    }
  ];

  filesUploaded(files: Array<File>) {
    this.dataSource = [
      ...files
    ]
  }

  delete(filename: string): void {
    if (this.deleteFunction()) {
      const idx = this.dataSource.findIndex(file => file.name === filename);
      this.dataSource.splice(idx, 1);
      this.dataSource = [
        ...this.dataSource
      ];
    }
  }
}
