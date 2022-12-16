import {Component} from '@angular/core';
import {Person, persons} from "../../testdata/person.model";

@Component({
  selector: 'app-dynamic-table-showcase',
  templateUrl: './dynamic-table-showcase.component.html',
  styleUrls: ['./dynamic-table-showcase.component.scss']
})

export class DynamicTableShowcaseComponent {

  data: Person[] = persons;
  displayedColumns: (Extract<keyof Person, string>)[] = ['firstname', 'lastname', 'age'];


}
