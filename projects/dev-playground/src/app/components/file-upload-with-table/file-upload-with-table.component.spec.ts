import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadWithTableComponent } from './file-upload-with-table.component';

describe('FileUploadWithTableComponent', () => {
  let component: FileUploadWithTableComponent;
  let fixture: ComponentFixture<FileUploadWithTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadWithTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadWithTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
