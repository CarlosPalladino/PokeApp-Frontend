/* tslint:disable */
/* eslint-disable */
import { Category } from '../models/category';
import { Pokemons } from '../models/pokemons';
export interface PokemonCategory {
  category?: Category;
  categoryId?: number;
  pokemon?: Pokemons;
  pokemonId?: number;
}
