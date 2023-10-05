/* tslint:disable */
/* eslint-disable */
import { Pokemons } from '../models/pokemons';
import { Reviewer } from '../models/reviewer';
export interface Review {
  id?: number;
  pokemon?: Pokemons;
  rating?: number;
  reviewer?: Reviewer;
  text?: null | string;
  title?: null | string;
}
