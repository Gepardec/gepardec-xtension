import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorFormFieldComponent } from './editor-form-field.component';

describe('EditorFormFieldComponent', () => {
  let component: EditorFormFieldComponent;
  let fixture: ComponentFixture<EditorFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorFormFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
