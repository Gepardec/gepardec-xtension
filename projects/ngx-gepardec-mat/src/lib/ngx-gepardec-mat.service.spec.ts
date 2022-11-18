import { TestBed } from '@angular/core/testing';

import { NgxGepardecMatService } from './ngx-gepardec-mat.service';

describe('NgxGepardecMatService', () => {
  let service: NgxGepardecMatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGepardecMatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
