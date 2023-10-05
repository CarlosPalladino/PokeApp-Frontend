/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Reviewer } from '../../models/reviewer';

export interface ApiReviewerGet$Json$Params {
}

export function apiReviewerGet$Json(http: HttpClient, rootUrl: string, params?: ApiReviewerGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Reviewer>>> {
  const rb = new RequestBuilder(rootUrl, apiReviewerGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Reviewer>>;
    })
  );
}

apiReviewerGet$Json.PATH = '/api/Reviewer';
