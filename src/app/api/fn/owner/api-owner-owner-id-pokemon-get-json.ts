/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Owner } from '../../models/owner';

export interface ApiOwnerOwnerIdPokemonGet$Json$Params {
  ownerId: number;
}

export function apiOwnerOwnerIdPokemonGet$Json(http: HttpClient, rootUrl: string, params: ApiOwnerOwnerIdPokemonGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Owner>> {
  const rb = new RequestBuilder(rootUrl, apiOwnerOwnerIdPokemonGet$Json.PATH, 'get');
  if (params) {
    rb.path('ownerId', params.ownerId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Owner>;
    })
  );
}

apiOwnerOwnerIdPokemonGet$Json.PATH = '/api/Owner/{ownerId}/pokemon';
