import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTextEditorTestComponent } from './inline-text-editor-test.component';

describe('InlineTextEditorTestComponent', () => {
  let component: InlineTextEditorTestComponent;
  let fixture: ComponentFixture<InlineTextEditorTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineTextEditorTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineTextEditorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
