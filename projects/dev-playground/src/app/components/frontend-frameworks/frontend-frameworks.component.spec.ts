import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FrontendFrameworksComponent} from './frontend-frameworks.component';

describe('FrontendFrameworksComponent', () => {
  let component: FrontendFrameworksComponent;
  let fixture: ComponentFixture<FrontendFrameworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontendFrameworksComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
