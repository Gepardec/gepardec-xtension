import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ColumnSpec} from '../dynamic-table/column-spec';
import {FileUploadComponent} from '../file-upload/file-upload.component';

@Component({
  selector: 'gpx-file-upload-with-table',
  templateUrl: './file-upload-with-table.component.html',
  styleUrls: ['./file-upload-with-table.component.scss']
})
export class FileUploadWithTableComponent extends FileUploadComponent {

  dataSource: Array<File>;

  @Input() deleteFunction: (param?: any) => boolean;

  @Output() singleFileUploadClicked: EventEmitter<File> = new EventEmitter<File>();
  @Output() allFilesUploadClicked: EventEmitter<Array<File>> = new EventEmitter<Array<File>>();

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

  upload(file: File) {
    this.singleFileUploadClicked.emit(file);
  }

  uploadAll() {
    this.allFilesUploadClicked.emit(this.dataSource);
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
