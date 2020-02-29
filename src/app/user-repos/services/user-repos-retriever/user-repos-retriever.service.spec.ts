import { TestBed } from '@angular/core/testing';

import { UserReposRetrieverService } from './user-repos-retriever.service';

describe('UserReposRetrieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserReposRetrieverService = TestBed.get(UserReposRetrieverService);
    expect(service).toBeTruthy();
  });
});
