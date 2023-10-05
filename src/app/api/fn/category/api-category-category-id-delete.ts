/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiCategoryCategoryIdDelete$Params {
  categoryId: number;
}

export function apiCategoryCategoryIdDelete(http: HttpClient, rootUrl: string, params: ApiCategoryCategoryIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiCategoryCategoryIdDelete.PATH, 'delete');
  if (params) {
    rb.path('categoryId', params.categoryId, {});
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

apiCategoryCategoryIdDelete.PATH = '/api/Category/{categoryId}';
