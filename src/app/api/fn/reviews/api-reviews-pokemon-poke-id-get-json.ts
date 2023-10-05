/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Review } from '../../models/review';

export interface ApiReviewsPokemonPokeIdGet$Json$Params {
  PokeId: number;
}

export function apiReviewsPokemonPokeIdGet$Json(http: HttpClient, rootUrl: string, params: ApiReviewsPokemonPokeIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Review>> {
  const rb = new RequestBuilder(rootUrl, apiReviewsPokemonPokeIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('PokeId', params.PokeId, {});
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

apiReviewsPokemonPokeIdGet$Json.PATH = '/api/Reviews/pokemon/{PokeId}';
