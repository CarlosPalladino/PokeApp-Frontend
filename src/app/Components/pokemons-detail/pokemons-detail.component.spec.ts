import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsDetailComponent } from './pokemons-detail.component';

describe('PokemonsDetailComponent', () => {
  let component: PokemonsDetailComponent;
  let fixture: ComponentFixture<PokemonsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonsDetailComponent]
    });
    fixture = TestBed.createComponent(PokemonsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
