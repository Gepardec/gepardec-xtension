import {Component, Input} from '@angular/core';
import {ColumnSpec} from '../dynamic-table/column-spec';
import {FileUploadComponent} from '../file-upload/file-upload.component';
import {Observable} from 'rxjs';

export type Status = 'staged' | 'loading' | 'uploaded';

@Component({
  selector: 'gpx-file-upload-with-table',
  templateUrl: './file-upload-with-table.component.html',
  styleUrls: ['./file-upload-with-table.component.scss']
})
export class FileUploadWithTableComponent extends FileUploadComponent {

  @Input() uploadCallback: (file: File) => Observable<File>;
  @Input() uploadAllCallback: (files: Array<File>) => Observable<Array<File>>;
  @Input() deleteCallback: (file: File) => Observable<boolean>;

  dataSource: Array<File>;
  fileStatusMap: Map<File, Status> = new Map<File, Status>();
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
      header: 'Aktionen',
      width: '10%'
    }
  ];

  updateDataSource(files: Array<File>) {
    files.forEach(file => {
      if (!this.isHandled(file)) {
        this.fileStatusMap.set(file, 'staged');
      }
    })
    this.dataSource = files;
  }

  isUploading(file: File): boolean {
    return this.fileStatusMap.get(file) === 'loading';
  }

  isUploaded(file: File): boolean {
    return this.fileStatusMap.get(file) === 'uploaded';
  }

  isSelected(file: File): boolean {
    return this.fileStatusMap.get(file) === 'staged';
  }

  isHandled(file: File): boolean {
    return this.isUploading(file) || this.isUploaded(file);
  }

  isAllUploaded(): boolean {
    return [...this.fileStatusMap.values()].every(status => status === 'uploaded');
  }

  upload(file: File) {
    if (this.isHandled(file)) {
      return;
    }

    this.fileStatusMap.set(file, 'loading');

    this.uploadCallback(file).subscribe(file => {
      this.fileStatusMap.set(file, 'uploaded');
    });
  }

  uploadAll() {
    if (this.uploadAllCallback !== undefined) {
      this.dedicatedUploadAll();
    } else {
      this.dataSource.filter(file => !this.isHandled(file)).forEach(file => this.upload(file));
    }
  }

  dedicatedUploadAll() {
    console.log('component uploadAll() clicked');
    const filesToUpload = this.dataSource.filter(file => !this.isHandled(file));
    filesToUpload.forEach(file => this.fileStatusMap.set(file, 'loading'));

    this.uploadAllCallback(filesToUpload).subscribe(files => {
      files.forEach(file => this.fileStatusMap.set(file, 'uploaded'));
    });
  }

  // uploadAll() {
  //   console.log('component uploadAll() clicked');
  //   const filesToUpload = this.dataSource.filter(file => !this.isHandled(file));
  //   filesToUpload.forEach(file => this.fileStatusMap.set(file, 'uploading'));
  //
  //   this.uploadAllCallback(filesToUpload).subscribe(files => {
  //     files.forEach(file => this.fileStatusMap.set(file, 'uploaded'));
  //   });
  // }

  delete(file: File): void {
    if (this.isSelected(file)) {
      this.deleteFromTable(file);
    } else if (!this.isUploading(file)) {
      this.fileStatusMap.set(file, 'loading');
      this.deleteCallback(file).subscribe(successful => {
        if (successful) {
          this.deleteFromTable(file);
        }
      });
    }
  }

  private deleteFromTable(file: File) {
    const idx = this.dataSource.findIndex(fi => fi.name === file.name);
    this.dataSource.splice(idx, 1);
    this.dataSource = [
      ...this.dataSource
    ];
  }
}
