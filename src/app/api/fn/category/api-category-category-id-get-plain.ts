/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Category } from '../../models/category';

export interface ApiCategoryCategoryIdGet$Plain$Params {
  CategoryId: number;
}

export function apiCategoryCategoryIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiCategoryCategoryIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Category>> {
  const rb = new RequestBuilder(rootUrl, apiCategoryCategoryIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('CategoryId', params.CategoryId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Category>;
    })
  );
}

apiCategoryCategoryIdGet$Plain.PATH = '/api/Category/{CategoryId}';
