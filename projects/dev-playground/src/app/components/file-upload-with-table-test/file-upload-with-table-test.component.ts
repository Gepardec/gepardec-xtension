import {Component} from '@angular/core';

@Component({
  selector: 'app-file-upload-with-table',
  templateUrl: './file-upload-with-table-test.component.html',
  styleUrls: ['./file-upload-with-table-test.component.scss']
})
export class FileUploadWithTableTestComponent {

  delete(): boolean {
    return true;
  }
}
