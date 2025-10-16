import { TestBed } from '@angular/core/testing';

import { TicketRegistrationService } from './ticket-registration.service';

describe('TicketRegistrationService', () => {
  let service: TicketRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
