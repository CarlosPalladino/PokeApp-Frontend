/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OwnerDto } from '../../models/owner-dto';

export interface ApiOwnerPost$Params {
  CountryId?: number;
      body?: OwnerDto
}

export function apiOwnerPost(http: HttpClient, rootUrl: string, params?: ApiOwnerPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiOwnerPost.PATH, 'post');
  if (params) {
    rb.query('CountryId', params.CountryId, {});
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

apiOwnerPost.PATH = '/api/Owner';
