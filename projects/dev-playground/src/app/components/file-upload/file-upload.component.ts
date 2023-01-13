import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  @Input() requiredFileType?: string;
  @Input() uploadTitle?: string;

  @Input() multiple: boolean = false;
  @Input() maxSize: number = -1;
  @Input() noFileUploadedText: string = 'No file uploaded yet.';

  @Output() filesUploadedEvent: EventEmitter<FileList> = new EventEmitter<FileList>();
  @Output() maxNumberOfFilesExceededEvent: EventEmitter<FileList> = new EventEmitter<FileList>();

  fileName: string = '';

  onFileSelected(event: any) {

    const files: FileList = event.target.files;

    if (this.multiple && this.maxSize !== -1 && files.length > this.maxSize) {
      this.maxNumberOfFilesExceededEvent.emit(files);
      return;
    }

    if (files) {
      this.fileName = Array.from(files)
        .map(file => file.name)
        .join(", ");

      this.filesUploadedEvent.emit(files);
    }
  }
}
