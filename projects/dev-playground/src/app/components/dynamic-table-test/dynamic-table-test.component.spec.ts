import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicTableTestComponent} from './dynamic-table-test.component';

describe('DynamicTableShowcaseComponent', () => {
  let component: DynamicTableTestComponent;
  let fixture: ComponentFixture<DynamicTableTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicTableTestComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DynamicTableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
