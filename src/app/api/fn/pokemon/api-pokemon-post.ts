/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PokemonDto } from '../../models/pokemon-dto';

export interface ApiPokemonPost$Params {
  ownerId?: number;
  categoryId?: number;
      body?: PokemonDto
}

export function apiPokemonPost(http: HttpClient, rootUrl: string, params?: 
  ApiPokemonPost$Params, context?: HttpContext):
   Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiPokemonPost.PATH, 'post');
  if (params) {
    rb.query('ownerId', params.ownerId, {});
    rb.query('categoryId', params.categoryId, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

apiPokemonPost.PATH = '/api/Pokemon';
