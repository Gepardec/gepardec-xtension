import {Component} from '@angular/core';

@Component({
  selector: 'app-file-upload-test',
  templateUrl: './file-upload-test.component.html',
  styleUrls: ['./file-upload-test.component.scss']
})
export class FileUploadTestComponent {

  title= '';

  filesUploaded(files: Array<File>) {
    this.title = files.map(file => file.name).join("; ");
  }
}
