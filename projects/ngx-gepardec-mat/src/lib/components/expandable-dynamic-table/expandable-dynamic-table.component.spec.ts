import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExpandableDynamicTableComponent} from './expandable-dynamic-table.component';

describe('ExpandableDynamicTableComponent', () => {
  let component: ExpandableDynamicTableComponent;
  let fixture: ComponentFixture<ExpandableDynamicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpandableDynamicTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExpandableDynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
