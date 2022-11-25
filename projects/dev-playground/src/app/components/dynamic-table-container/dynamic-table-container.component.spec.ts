import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableContainerComponent } from './dynamic-table-container.component';

describe('DynamicTableContainerComponent', () => {
  let component: DynamicTableContainerComponent;
  let fixture: ComponentFixture<DynamicTableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTableContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
