/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Reviewer } from '../../models/reviewer';

export interface ApiReviewerReviewerIdGet$Json$Params {
  reviewerId: number;
}

export function apiReviewerReviewerIdGet$Json(http: HttpClient, rootUrl: string, params: ApiReviewerReviewerIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Reviewer>> {
  const rb = new RequestBuilder(rootUrl, apiReviewerReviewerIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('reviewerId', params.reviewerId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Reviewer>;
    })
  );
}

apiReviewerReviewerIdGet$Json.PATH = '/api/Reviewer/{reviewerId}';
