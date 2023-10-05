/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Country } from '../../models/country';

export interface ApiCountryGet$Plain$Params {
}

export function apiCountryGet$Plain(http: HttpClient, rootUrl: string, params?: ApiCountryGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Country>>> {
  const rb = new RequestBuilder(rootUrl, apiCountryGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Country>>;
    })
  );
}

apiCountryGet$Plain.PATH = '/api/Country';
