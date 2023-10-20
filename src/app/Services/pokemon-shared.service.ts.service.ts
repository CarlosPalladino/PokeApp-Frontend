import { Injectable } from '@angular/core';
import { PokemonDto } from '.././api/models/pokemon-dto';

@Injectable({
  providedIn: 'root'
})
export class PokemonSharedService {
  private pokemon: PokemonDto | null = null;

  setPokemon(pokemon: PokemonDto) {
    this.pokemon = pokemon;
  }

  getPokemon(): PokemonDto | null {
    return this.pokemon;
  }
}
