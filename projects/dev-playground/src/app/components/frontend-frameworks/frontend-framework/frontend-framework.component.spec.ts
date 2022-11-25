import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendFrameworkComponent } from './frontend-framework.component';

describe('FrontendFrameworkComponent', () => {
  let component: FrontendFrameworkComponent;
  let fixture: ComponentFixture<FrontendFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendFrameworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
