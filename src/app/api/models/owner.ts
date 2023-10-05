/* tslint:disable */
/* eslint-disable */
import { Country } from '../models/country';
import { PokemonOwner } from '../models/pokemon-owner';
export interface Owner {
  country?: Country;
  firstName?: null | string;
  gym?: null | string;
  id?: number;
  lastName?: null | string;
  pokemonOwner?: null | Array<PokemonOwner>;
}
