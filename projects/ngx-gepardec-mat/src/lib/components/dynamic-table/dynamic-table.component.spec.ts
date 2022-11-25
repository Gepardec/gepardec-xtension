import {ComponentFixture, fakeAsync, flush, TestBed} from '@angular/core/testing';

import {DynamicTableComponent} from './dynamic-table.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatHeaderRowHarness, MatTableHarness} from '@angular/material/table/testing';
import moment, {Moment} from 'moment';
import {MatSortHeaderHarness} from '@angular/material/sort/testing';
import {MatPaginatorHarness} from '@angular/material/paginator/testing';
import {MatIconModule} from '@angular/material/icon';
import {By} from '@angular/platform-browser';


let loader: HarnessLoader;

describe('CustomizableTableComponent', () => {
  let component: DynamicTableComponent<Person>;
  let fixture: ComponentFixture<DynamicTableComponent<Person>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DynamicTableComponent
      ],
      imports: [
        NoopAnimationsModule,
        TranslateModule.forRoot(),
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent<DynamicTableComponent<Person>>(DynamicTableComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have three data rows', async () => {
    component.dataSource.data = DataMock.persons;
    component.displayedColumns = ['firstName', 'lastName', 'sex', 'birthday'];

    const table = await loader.getHarness(MatTableHarness);
    const rows = await table.getRows();

    expect(rows).toHaveSize(3);
  });

  it('should have columns names equal to names defined in displayedColumns array', async () => {
    component.dataSource.data = DataMock.persons;
    component.displayedColumns = ['firstName', 'lastName', 'sex', 'birthday'];

    const table = await loader.getHarness(MatTableHarness);
    const headerRow = await table.getHarness(MatHeaderRowHarness);
    const headerCells = await headerRow.getCells();

    expect(await headerCells[0].getColumnName()).toBe('firstName');
    expect(await headerCells[1].getColumnName()).toBe('lastName');
    expect(await headerCells[2].getColumnName()).toBe('sex');
    expect(await headerCells[3].getColumnName()).toBe('birthday');
  });

  it('should have unresolved headers when no translationPrefix present', async () => {
    component.dataSource.data = DataMock.persons;
    component.displayedColumns = ['firstName', 'lastName', 'sex', 'birthday'];

    const table = await loader.getHarness(MatTableHarness);
    const headerRow = await table.getHarness(MatHeaderRowHarness);
    const headerCells = await headerRow.getCells();

    expect(await headerCells[0].getText()).toBe('undefined.firstName');
    expect(await headerCells[1].getText()).toBe('undefined.lastName');
    expect(await headerCells[2].getText()).toBe('undefined.sex');
    expect(await headerCells[3].getText()).toBe('undefined.birthday');
  });

  it('should have resolved and translated headers', async () => {
    component.dataSource.data = DataMock.persons;
    component.displayedColumns = ['firstName', 'lastName', 'sex', 'birthday'];
    component.translationPrefix = 'test';

    const translateMock = TestBed.inject(TranslateService);
    spyOn(translateMock, 'instant')
      .withArgs('test.firstName').and.returnValue('First Name')
      .withArgs('test.lastName').and.returnValue('Last Name')
      .withArgs('test.sex').and.returnValue('Sex')
      .withArgs('test.birthday').and.returnValue('Birthday');

    const table = await loader.getHarness(MatTableHarness);
    const headerRow = await table.getHarness(MatHeaderRowHarness);
    const headerCells = await headerRow.getCells();

    expect(await headerCells[0].getText()).toBe('First Name');
    expect(await headerCells[1].getText()).toBe('Last Name');
    expect(await headerCells[2].getText()).toBe('Sex');
    expect(await headerCells[3].getText()).toBe('Birthday');
  });

  it('should have only three out of four sortable header cells', async () => {
    component.dataSource.data = DataMock.persons;
    component.displayedColumns = ['firstName', 'lastName', 'sex', 'birthday'];
    component.nonSortColumns = ['sex'];

    const table = await loader.getHarness(MatTableHarness);
    const sorts = await table.getAllHarnesses(MatSortHeaderHarness);

    expect(sorts).toHaveSize(3);
  });

  it('should format a date column as dd.MM.YYYY HH:mm', async () => {
    component.dataSource.data = DataMock.persons;
    component.displayedColumns = ['firstName', 'lastName', 'sex', 'birthday'];

    const table = await loader.getHarness(MatTableHarness);
    const cellTextByColumn = await table.getCellTextByColumnName();

    expect(cellTextByColumn.birthday).toBeTruthy();
    expect(cellTextByColumn.birthday.text).toBeTruthy();
    expect(cellTextByColumn.birthday.text).toEqual(['01.01.2021 00:00', '10.03.1940 00:00', '23.07.1960 00:00']);
  });

  it('should have a paginator rendered by default', async () => {
    component.dataSource.data = DataMock.persons;
    component.displayedColumns = ['firstName', 'lastName', 'sex', 'birthday'];

    const paginator = await loader.getHarness(MatPaginatorHarness);

    expect(paginator).toBeTruthy();
  });

  it('should not have a paginator rendered when "renderPaginator" set to false', fakeAsync(() => {
    component.dataSource.data = DataMock.persons;
    component.displayedColumns = ['firstName', 'lastName', 'sex', 'birthday'];
    component.renderPaginator = false;

    expect(() => {
      loader.getHarness(MatPaginatorHarness);
      flush();
    }).toThrow();
  }));

  it('should not have a "no-data-row" by default when no data is present', async () => {
    component.displayedColumns = ['firstName', 'lastName', 'sex', 'birthday'];

    const table = await loader.getHarness(MatTableHarness);
    const rows = await table.getRows();
    const noDataRow = fixture.debugElement.query(By.css('.mat-no-data-row'));

    expect(rows).toHaveSize(0);
    expect(noDataRow).toBeFalsy();
  });

  it('should have a "no-data-row" when "renderNoDataRow" is set to true and no data is present', async () => {
    component.displayedColumns = ['firstName', 'lastName', 'sex', 'birthday'];
    component.translationPrefix = 'test';
    component.renderNoDataRow = true;

    fixture.detectChanges();
    await fixture.whenStable();
    const noDataRow = fixture.debugElement.query(By.css('.mat-no-data-row'));
    const noDataText = noDataRow.query(By.css('#no-data-text'));

    expect(noDataRow).toBeTruthy();
    expect(noDataText.nativeElement.textContent).toEqual('test.no-data');
  });

  it('#idByTranslationPrefix - should return "result-table" when no translationPrefix is present', () => {
    expect(component.idByTranslationPrefix).toEqual('result-table');
  });

  it('#idByTranslationPrefix - should return "person-table" when translationPrefix is "person"', () => {
    component.translationPrefix = 'person';

    expect(component.idByTranslationPrefix).toEqual('person-table');
  });

  it('#idByTranslationPrefix - should return "person-table" when translationPrefix is "person.table"', () => {
    component.translationPrefix = 'person.table';

    expect(component.idByTranslationPrefix).toEqual('person-table');
  });

  interface Person {
    id: number;
    sex: 'm' | 'f' | 'o';
    firstName: string;
    lastName: string;
    birthday: Moment;
  }

  class DataMock {
    static persons: Person[] = [
      {
        id: 1,
        firstName: 'Donald',
        lastName: 'Duck',
        birthday: moment('2022-01-01'),
        sex: 'm'
      },
      {
        id: 2,
        firstName: 'Chuck',
        lastName: 'Norris',
        birthday: moment('1940-03-10'),
        sex: 'm'
      },
      {
        id: 3,
        firstName: 'Some',
        lastName: 'Girl',
        birthday: moment('1960-07-23'),
        sex: 'f'
      }
    ];
  }
});
