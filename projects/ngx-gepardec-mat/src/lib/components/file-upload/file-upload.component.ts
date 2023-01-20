import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'gpx-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  @Input() requiredFileType?: string;
  @Input() uploadTitle?: string;

  @Input() multiple: boolean = false;
  @Input() maxSize: number = -1;
  @Input() noFileUploadedText: string = 'No file uploaded yet.';
  @Input() allowOnlyFolders: boolean = false;

  @Output() filesUploadedEvent: EventEmitter<Array<File>> = new EventEmitter<Array<File>>();
  @Output() maxNumberOfFilesExceededEvent: EventEmitter<Array<File>> = new EventEmitter<Array<File>>();

  fileName: string = '';

  onFileSelected(event: any) {
    const fileList: FileList = event.target.files;
    const files: Array<File> = Array.from(fileList);
    this.handleUploadedFiles(files);
  }

  onFilesDropped(fileList: FileList): void {
    let files: File[] = Array.from(fileList)
    if (!this.multiple && files.length > 1) {
      files = Array.of(files[0]);
    }

    this.handleUploadedFiles(files);
  }

  handleUploadedFiles(files: Array<File>) {
    if (this.multiple && this.maxSize !== -1 && files.length > this.maxSize) {
      this.maxNumberOfFilesExceededEvent.emit(files);
      return;
    }

    if (files) {
      this.fileName = files
        .map(file => file.name)
        .join(', ');

      this.filesUploadedEvent.emit(files);
    }
  }
}
