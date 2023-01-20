import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExpandableDynamicTableTestComponent} from './expandable-dynamic-table-test.component';

describe('ExpandableDynamicTableTestComponent', () => {
  let component: ExpandableDynamicTableTestComponent;
  let fixture: ComponentFixture<ExpandableDynamicTableTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpandableDynamicTableTestComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExpandableDynamicTableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
