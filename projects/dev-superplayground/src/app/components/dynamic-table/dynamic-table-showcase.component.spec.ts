import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicTableShowcaseComponent} from './dynamic-table-showcase.component';

describe('DynamicTableShowcaseComponent', () => {
  let component: DynamicTableShowcaseComponent;
  let fixture: ComponentFixture<DynamicTableShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicTableShowcaseComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DynamicTableShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
