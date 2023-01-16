import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-file-upload-test',
  templateUrl: './file-upload-test.component.html',
  styleUrls: ['./file-upload-test.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FileUploadTestComponent {

  dataSource: Array<Employee> = EMPLOYEES;
  columnsToDisplay = ['name', 'birthDate', 'file'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: File | null;

  filesUploaded(index: number, files: Array<File>) {
    this.dataSource[index].files = files;
  }

  buildTitle(files: Array<File>) {
    let title = '';
    title = files.length + ' Dateien hochgeladen.';
    if (files.length == 1) {
      title = files.length + ' Datei hochgeladen.';
    }

    return title;
  }
}

export interface Employee {
  id: number;
  name: string;
  birthDate: Date;
  files: Array<File>;
}

const EMPLOYEES: Array<Employee> = [
  {
    id: 0,
    name: 'Christoph Ruhsam',
    birthDate: new Date(),
    files: []
  },
  {
    id: 1,
    name: 'Marcel Reiter',
    birthDate: new Date(),
    files: []
  },
  {
    id: 2,
    name: 'Oliver Tod',
    birthDate: new Date(),
    files: []
  }
]
