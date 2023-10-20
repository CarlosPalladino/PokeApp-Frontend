import { TestBed } from '@angular/core/testing';

import { PokemonSharedServiceTsService } from './pokemon-shared.service.ts.service';

describe('PokemonSharedServiceTsService', () => {
  let service: PokemonSharedServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonSharedServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
