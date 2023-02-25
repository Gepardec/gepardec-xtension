import {Component} from '@angular/core';
import {Person, persons} from '../../testdata/person.model';
import {ColumnSpec} from '../../../../../ngx-gepardec-mat/src/lib/components/dynamic-table/column-spec';

@Component({
  selector: 'app-dynamic-table-showcase',
  templateUrl: './dynamic-table-test.component.html',
  styleUrls: ['./dynamic-table-test.component.scss']
})

export class DynamicTableTestComponent {

  data: Person[] = persons;
  columnSpecs: ColumnSpec<Person>[] = [
    {
      displayedColumn: 'firstname-lastname',
      header: 'Vollständiger Name',
    },
    // {
    //   displayedColumn: 'firstname',
    //   header: 'Vorname'
    // },
    // {
    //   displayedColumn: 'lastname',
    //   header: 'Nachname'
    // },
    {
      displayedColumn: 'birthday',
      header: 'Geburtstag',
    },
    {
      displayedColumn: 'age',
      header: 'Alter',
      width: '200px'
    }
  ];
}
