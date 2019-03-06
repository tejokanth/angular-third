import { TestBed } from '@angular/core/testing';

import { PlaydetServicesService } from './playdet-services.service';

describe('PlaydetServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaydetServicesService = TestBed.get(PlaydetServicesService);
    expect(service).toBeTruthy();
  });
});
