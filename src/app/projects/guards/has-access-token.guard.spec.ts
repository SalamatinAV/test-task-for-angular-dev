import { TestBed } from '@angular/core/testing';

import { HasAccessTokenGuard } from './has-access-token.guard';

describe('HasAccessTokenGuard', () => {
  let guard: HasAccessTokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasAccessTokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
