import { Component } from '@angular/core';
import {Person, persons} from './person';

@Component({
  selector: 'app-dynamic-table-container',
  templateUrl: './dynamic-table-container.component.html',
  styleUrls: ['./dynamic-table-container.component.scss']
})
export class DynamicTableContainerComponent {

  data: Person[] = persons;
  displayedColumns: (Extract<keyof Person, string>)[] = ['firstname', 'lastname', 'birthday', 'age'];
}
