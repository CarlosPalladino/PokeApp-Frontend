/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Category } from '../../models/category';

export interface ApiCategoryGet$Json$Params {
}

export function apiCategoryGet$Json(http: HttpClient, rootUrl: string, params?: ApiCategoryGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Category>>> {
  const rb = new RequestBuilder(rootUrl, apiCategoryGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Category>>;
    })
  );
}

apiCategoryGet$Json.PATH = '/api/Category';
