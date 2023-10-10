/* tslint:disable */
/* eslint-disable */
import { PokemonCategory } from '../models/pokemon-category';
import { PokemonOwner } from '../models/pokemon-owner';
import { Review } from '../models/review';
export interface Pokemons {
  birthDate?: string;
  id?: number;
  image?: null | string;
  name?: null | string;
  pokemonCategories?: null | Array<PokemonCategory>;
  pokemonOwners?: null | Array<PokemonOwner>;
  reviews?: null | Array<Review>;
}
