import { TestBed, inject } from '@angular/core/testing';

import { AngularClientService } from './angular-client.service';

describe('AngularClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularClientService]
    });
  });

  it('should be created', inject([AngularClientService], (service: AngularClientService) => {
    expect(service).toBeTruthy();
  }));
});
