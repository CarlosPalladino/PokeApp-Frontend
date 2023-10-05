/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiReviewerReviewerIdReviewsGet$Params {
  reviewerId: number;
}

export function apiReviewerReviewerIdReviewsGet(http: HttpClient, rootUrl: string, params: ApiReviewerReviewerIdReviewsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiReviewerReviewerIdReviewsGet.PATH, 'get');
  if (params) {
    rb.path('reviewerId', params.reviewerId, {});
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

apiReviewerReviewerIdReviewsGet.PATH = '/api/Reviewer/{reviewerId}/reviews';
