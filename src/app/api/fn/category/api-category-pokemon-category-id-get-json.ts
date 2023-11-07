/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Pokemons } from '../../models/pokemons';
import { PokemonDto } from '../../models';

export interface ApiCategoryPokemonCategoryIdGet$Json$Params {
  categoryId: number;
}

export function apiCategoryPokemonCategoryIdGet$Json(http: HttpClient, rootUrl: string, params: ApiCategoryPokemonCategoryIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Pokemons>>> {
  const rb = new RequestBuilder(rootUrl, apiCategoryPokemonCategoryIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('categoryId', params.categoryId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PokemonDto>>;
    })
  );
}

apiCategoryPokemonCategoryIdGet$Json.PATH = '/api/Category/pokemon/{categoryId}';
