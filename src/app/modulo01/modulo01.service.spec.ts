import { TestBed, inject } from '@angular/core/testing';

import { Modulo01Service } from './modulo01.service';

describe('Modulo01Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Modulo01Service]
    });
  });

  it('should be created', inject([Modulo01Service], (service: Modulo01Service) => {
    expect(service).toBeTruthy();
  }));
});
