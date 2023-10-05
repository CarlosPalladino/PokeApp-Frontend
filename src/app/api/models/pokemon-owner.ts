/* tslint:disable */
/* eslint-disable */
import { Owner } from '../models/owner';
import { Pokemons } from '../models/pokemons';
export interface PokemonOwner {
  owner?: Owner;
  ownerId?: number;
  pokemon?: Pokemons;
  pokemonId?: number;
}
