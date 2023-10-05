/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiPokemonPokeIdRatingGet$Plain$Params {
  PokeId: number;
}

export function apiPokemonPokeIdRatingGet$Plain(http: HttpClient, rootUrl: string, params: ApiPokemonPokeIdRatingGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
  const rb = new RequestBuilder(rootUrl, apiPokemonPokeIdRatingGet$Plain.PATH, 'get');
  if (params) {
    rb.path('PokeId', params.PokeId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
    })
  );
}

apiPokemonPokeIdRatingGet$Plain.PATH = '/api/Pokemon/{PokeId}/rating';
