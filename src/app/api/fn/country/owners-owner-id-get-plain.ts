/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Country } from '../../models/country';

export interface OwnersOwnerIdGet$Plain$Params {
  ownerId: number;
}

export function ownersOwnerIdGet$Plain(http: HttpClient, rootUrl: string, params: OwnersOwnerIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Country>> {
  const rb = new RequestBuilder(rootUrl, ownersOwnerIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('ownerId', params.ownerId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Country>;
    })
  );
}

ownersOwnerIdGet$Plain.PATH = '/owners/{ownerId}';
