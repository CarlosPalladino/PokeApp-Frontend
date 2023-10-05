/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Review } from '../../models/review';

export interface ApiReviewsPokemonPokeIdGet$Plain$Params {
  PokeId: number;
}

export function apiReviewsPokemonPokeIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiReviewsPokemonPokeIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Review>> {
  const rb = new RequestBuilder(rootUrl, apiReviewsPokemonPokeIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('PokeId', params.PokeId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Review>;
    })
  );
}

apiReviewsPokemonPokeIdGet$Plain.PATH = '/api/Reviews/pokemon/{PokeId}';
