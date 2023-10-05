/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReviewDto } from '../../models/review-dto';

export interface ApiReviewsPost$Params {
  reviewerId?: number;
  PokeId?: number;
      body?: ReviewDto
}

export function apiReviewsPost(http: HttpClient, rootUrl: string, params?: ApiReviewsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiReviewsPost.PATH, 'post');
  if (params) {
    rb.query('reviewerId', params.reviewerId, {});
    rb.query('PokeId', params.PokeId, {});
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

apiReviewsPost.PATH = '/api/Reviews';
