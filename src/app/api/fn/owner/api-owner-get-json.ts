/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Owner } from '../../models/owner';

export interface ApiOwnerGet$Json$Params {
}

export function apiOwnerGet$Json(http: HttpClient, rootUrl: string, params?: ApiOwnerGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Owner>>> {
  const rb = new RequestBuilder(rootUrl, apiOwnerGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Owner>>;
    })
  );
}

apiOwnerGet$Json.PATH = '/api/Owner';
