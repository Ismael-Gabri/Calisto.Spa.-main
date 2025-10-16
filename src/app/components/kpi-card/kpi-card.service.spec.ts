import { TestBed } from '@angular/core/testing';

import { KpiCardService } from './kpi-card.service';

describe('KpiCardService', () => {
  let service: KpiCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KpiCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
