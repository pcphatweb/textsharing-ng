import { TestBed, inject } from '@angular/core/testing';

import { TextsharingService } from './textsharing.service';

describe('TextsharingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextsharingService]
    });
  });

  it('should be created', inject([TextsharingService], (service: TextsharingService) => {
    expect(service).toBeTruthy();
  }));
});
