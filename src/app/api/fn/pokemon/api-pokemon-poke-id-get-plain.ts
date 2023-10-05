/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Pokemons } from '../../models/pokemons';

export interface ApiPokemonPokeIdGet$Plain$Params {
  PokeId: number;
}

export function apiPokemonPokeIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiPokemonPokeIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Pokemons>> {
  const rb = new RequestBuilder(rootUrl, apiPokemonPokeIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('PokeId', params.PokeId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Pokemons>;
    })
  );
}

apiPokemonPokeIdGet$Plain.PATH = '/api/Pokemon/{PokeId}';
