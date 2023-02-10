import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-file-upload-with-table',
  templateUrl: './file-upload-with-table-test.component.html',
  styleUrls: ['./file-upload-with-table-test.component.scss']
})
export class FileUploadWithTableTestComponent {

  constructor(private snackbar: MatSnackBar) {
  }

  delete(): boolean {
    return true;
  }

  upload(file: File): void {
    this.snackbar.open(`Datei '${file.name}' hochgeladen`, 'OK', {duration: 2000});
  }

  uploadAll(files: Array<File>) {
    const fileNames = files.map(file => file.name).join(', ');
    this.snackbar.open(`Dateien '${fileNames}' hochgeladen`, 'OK', {duration: 2000});
  }
}
