/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiReviewsReviewIdDelete$Params {
  reviewId: number;
}

export function apiReviewsReviewIdDelete(http: HttpClient, rootUrl: string, params: ApiReviewsReviewIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiReviewsReviewIdDelete.PATH, 'delete');
  if (params) {
    rb.path('reviewId', params.reviewId, {});
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

apiReviewsReviewIdDelete.PATH = '/api/Reviews/{reviewId}';
