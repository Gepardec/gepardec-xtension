import {Component} from '@angular/core';
import {Person, persons} from "../../testdata/person.model";
import {ColumnSpec} from "../../../../../ngx-gepardec-mat/src/lib/components/dynamic-table/column-spec";

@Component({
  selector: 'app-dynamic-table-showcase',
  templateUrl: './dynamic-table-showcase.component.html',
  styleUrls: ['./dynamic-table-showcase.component.scss']
})

export class DynamicTableShowcaseComponent {

  data: Person[] = persons;
  columnSpecs: ColumnSpec[] = [{displayedColumn: 'firstname', header: 'Vorname'}, {displayedColumn: 'lastname', header: 'Nachname'}, {displayedColumn: 'age', header: 'Alter'}];

}
