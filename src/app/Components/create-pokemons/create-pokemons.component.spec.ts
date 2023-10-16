import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePokemonsComponent } from './create-pokemons.component';

describe('CreatePokemonsComponent', () => {
  let component: CreatePokemonsComponent;
  let fixture: ComponentFixture<CreatePokemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePokemonsComponent]
    });
    fixture = TestBed.createComponent(CreatePokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
