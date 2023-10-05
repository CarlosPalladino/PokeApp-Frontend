/* tslint:disable */
/* eslint-disable */
import { PokemonCategory } from '../models/pokemon-category';
export interface Category {
  id?: number;
  name?: null | string;
  pokemonCategories?: null | Array<PokemonCategory>;
}
