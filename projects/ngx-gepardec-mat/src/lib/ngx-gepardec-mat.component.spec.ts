import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGepardecMatComponent } from './ngx-gepardec-mat.component';

describe('NgxGepardecMatComponent', () => {
  let component: NgxGepardecMatComponent;
  let fixture: ComponentFixture<NgxGepardecMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGepardecMatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxGepardecMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
