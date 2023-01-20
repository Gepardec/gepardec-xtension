import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadDynamicTableComponent } from './file-upload-dynamic-table.component';

describe('FileUploadDynamicTableComponent', () => {
  let component: FileUploadDynamicTableComponent;
  let fixture: ComponentFixture<FileUploadDynamicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadDynamicTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadDynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
