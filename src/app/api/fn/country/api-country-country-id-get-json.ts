/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Pokemons } from '../../models/pokemons';

export interface ApiCountryCountryIdGet$Json$Params {
  countryId: number;
}

export function apiCountryCountryIdGet$Json(http: HttpClient, rootUrl: string, params: ApiCountryCountryIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Pokemons>> {
  const rb = new RequestBuilder(rootUrl, apiCountryCountryIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('countryId', params.countryId, {});
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

apiCountryCountryIdGet$Json.PATH = '/api/Country/{countryId}';
