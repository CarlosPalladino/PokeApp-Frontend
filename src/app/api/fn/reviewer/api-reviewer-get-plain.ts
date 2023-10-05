/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Reviewer } from '../../models/reviewer';

export interface ApiReviewerGet$Plain$Params {
}

export function apiReviewerGet$Plain(http: HttpClient, rootUrl: string, params?: ApiReviewerGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Reviewer>>> {
  const rb = new RequestBuilder(rootUrl, apiReviewerGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Reviewer>>;
    })
  );
}

apiReviewerGet$Plain.PATH = '/api/Reviewer';
