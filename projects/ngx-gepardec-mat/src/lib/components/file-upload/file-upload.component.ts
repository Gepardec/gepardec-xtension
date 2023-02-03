import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'gpx-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  fileName: string = '';
  _uploadedFiles: Array<File> = [];

  @Input() requiredFileType?: string;
  @Input() uploadTitle?: string;
  @Input() multiple: boolean = false;
  @Input() maxSize: number = -1;
  @Input() noFileUploadedText: string = 'No file uploaded yet.';
  @Input() allowOnlyFolders: boolean = false;

  @Input() set uploadedFiles(files: Array<File>) {
    this._uploadedFiles = files;
    this.fileName = this.joinFileNames(this._uploadedFiles);
  }

  @Output() filesUploadedEvent: EventEmitter<Array<File>> = new EventEmitter<Array<File>>();
  @Output() maxNumberOfFilesExceededEvent: EventEmitter<Array<File>> = new EventEmitter<Array<File>>();

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
    // this.uploadedFiles = files;
    if (this.multiple && this.maxSize !== -1 && files.length > this.maxSize) {
      this.maxNumberOfFilesExceededEvent.emit(files);
      return;
    }

    if (files) {
      this.fileName = this.joinFileNames(files);
      this.filesUploadedEvent.emit(files);
    }
  }

  clickNativeFileUpload(element: HTMLInputElement): void {
    // reset value of file upload so the same file can be uploaded again
    element.value = '';
    element.click();
  }

  joinFileNames(files: Array<File>): string {
    return files?.map(file => file.name).join(', ');
  }
}
