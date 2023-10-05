/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Review } from '../../models/review';

export interface ApiReviewsReviewIdGet$Json$Params {
  ReviewId: number;
}

export function apiReviewsReviewIdGet$Json(http: HttpClient, rootUrl: string, params: ApiReviewsReviewIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Review>> {
  const rb = new RequestBuilder(rootUrl, apiReviewsReviewIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('ReviewId', params.ReviewId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Review>;
    })
  );
}

apiReviewsReviewIdGet$Json.PATH = '/api/Reviews/{ReviewId}';
