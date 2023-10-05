/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Review } from '../../models/review';

export interface ApiReviewsGet$Json$Params {
}

export function apiReviewsGet$Json(http: HttpClient, rootUrl: string, params?: ApiReviewsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Review>>> {
  const rb = new RequestBuilder(rootUrl, apiReviewsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Review>>;
    })
  );
}

apiReviewsGet$Json.PATH = '/api/Reviews';
