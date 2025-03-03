import { TestBed } from '@angular/core/testing';

import { UserApiConnectService } from './user-api-connect.service';

describe('UserApiConnectService', () => {
  let service: UserApiConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserApiConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
