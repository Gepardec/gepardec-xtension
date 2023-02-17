import {Component} from '@angular/core';
import {Person, persons} from '../../testdata/person.model';
import {ColumnSpec} from '../../../../../ngx-gepardec-mat/src/lib/components/dynamic-table/column-spec';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-expandable-dynamic-table-test',
  templateUrl: './expandable-dynamic-table-test.component.html',
  styleUrls: ['./expandable-dynamic-table-test.component.scss']
})
export class ExpandableDynamicTableTestComponent {

  data: Person[] = persons;
  columnSpecs: ColumnSpec<Person>[] = [
    {
      displayedColumn: 'firstname',
      header: 'Vorname'
    },
    {
      displayedColumn: 'lastname',
      header: 'Nachname'
    },
    {
      displayedColumn: 'birthday',
      header: 'Geburtstag'
    },
    {
      displayedColumn: 'age',
      header: 'Alter'
    }
  ];

  constructor(private snackbar: MatSnackBar) {
  }

  openSnackbar(item: Person): void {
    this.snackbar.open(`${item.firstname} ${item.lastname} wurde geklickt!`, 'OK', {duration: 2000});
  }
}
