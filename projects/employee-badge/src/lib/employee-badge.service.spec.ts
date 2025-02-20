import { TestBed } from '@angular/core/testing';

import { EmployeeBadgeService } from './employee-badge.service';

describe('EmployeeBadgeService', () => {
  let service: EmployeeBadgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeBadgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
