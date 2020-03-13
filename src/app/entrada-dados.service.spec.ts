import { TestBed } from '@angular/core/testing';

import { EntradaDadosService } from './entrada-dados.service';

describe('EntradaDadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntradaDadosService = TestBed.get(EntradaDadosService);
    expect(service).toBeTruthy();
  });
});
