import { TestBed, inject } from '@angular/core/testing';

import { EngDictionaryServiceService } from './eng-dictionary-service.service';

describe('EngDictionaryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngDictionaryServiceService]
    });
  });

  it('should be created', inject([EngDictionaryServiceService], (service: EngDictionaryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
