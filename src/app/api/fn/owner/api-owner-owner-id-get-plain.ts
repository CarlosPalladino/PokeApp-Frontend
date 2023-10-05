/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Owner } from '../../models/owner';

export interface ApiOwnerOwnerIdGet$Plain$Params {
  ownerId: number;
}

export function apiOwnerOwnerIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiOwnerOwnerIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Owner>> {
  const rb = new RequestBuilder(rootUrl, apiOwnerOwnerIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('ownerId', params.ownerId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Owner>;
    })
  );
}

apiOwnerOwnerIdGet$Plain.PATH = '/api/Owner/{ownerId}';
