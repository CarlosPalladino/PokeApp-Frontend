/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Pokemons } from '../../models/pokemons';

export interface ApiOwnerPokemonOwnerIdGet$Plain$Params {
  ownerId: number;
}

export function apiOwnerPokemonOwnerIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiOwnerPokemonOwnerIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Pokemons>>> {
  const rb = new RequestBuilder(rootUrl, apiOwnerPokemonOwnerIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('ownerId', params.ownerId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Pokemons>>;
    })
  );
}

apiOwnerPokemonOwnerIdGet$Plain.PATH = '/api/Owner/pokemon/{ownerId}';
