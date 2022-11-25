import { Component } from '@angular/core';
import {Person, personen} from './person';

@Component({
  selector: 'app-dynamic-table-container',
  templateUrl: './dynamic-table-container.component.html',
  styleUrls: ['./dynamic-table-container.component.scss']
})
export class DynamicTableContainerComponent {

  data: Person[] = personen;
  displayedColumns: (keyof Person | string)[] = ['firstname', 'lastname', 'birthday', 'age'];
}
