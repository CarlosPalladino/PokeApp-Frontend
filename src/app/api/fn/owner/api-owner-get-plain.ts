/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Owner } from '../../models/owner';

export interface ApiOwnerGet$Plain$Params {
}

export function apiOwnerGet$Plain(http: HttpClient, rootUrl: string, params?: ApiOwnerGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Owner>>> {
  const rb = new RequestBuilder(rootUrl, apiOwnerGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Owner>>;
    })
  );
}

apiOwnerGet$Plain.PATH = '/api/Owner';
