import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadWithTableTestComponent } from './file-upload-with-table-test.component';

describe('FileUploadWithTableComponent', () => {
  let component: FileUploadWithTableTestComponent;
  let fixture: ComponentFixture<FileUploadWithTableTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadWithTableTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadWithTableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
