import { TestBed } from '@angular/core/testing';

import { ProyectoserviceService } from './proyectoservice.service';

describe('ProyectoserviceService', () => {
  let service: ProyectoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
