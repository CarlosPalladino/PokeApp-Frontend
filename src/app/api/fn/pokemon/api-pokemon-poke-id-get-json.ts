/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Pokemons } from '../../models/pokemons';

export interface ApiPokemonPokeIdGet$Json$Params {
  PokeId: number;
}

export function apiPokemonPokeIdGet$Json(http: HttpClient, rootUrl: string, params: ApiPokemonPokeIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Pokemons>> {
  const rb = new RequestBuilder(rootUrl, apiPokemonPokeIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('PokeId', params.PokeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Pokemons>;
    })
  );
}

apiPokemonPokeIdGet$Json.PATH = '/api/Pokemon/{PokeId}';
