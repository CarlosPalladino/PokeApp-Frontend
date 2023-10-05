/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Country } from '../../models/country';

export interface OwnersOwnerIdGet$Json$Params {
  ownerId: number;
}

export function ownersOwnerIdGet$Json(http: HttpClient, rootUrl: string, params: OwnersOwnerIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Country>> {
  const rb = new RequestBuilder(rootUrl, ownersOwnerIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('ownerId', params.ownerId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Country>;
    })
  );
}

ownersOwnerIdGet$Json.PATH = '/owners/{ownerId}';
