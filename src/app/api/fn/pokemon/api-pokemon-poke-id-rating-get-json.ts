/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiPokemonPokeIdRatingGet$Json$Params {
  PokeId: number;
}

export function apiPokemonPokeIdRatingGet$Json(http: HttpClient, rootUrl: string, params: ApiPokemonPokeIdRatingGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
  const rb = new RequestBuilder(rootUrl, apiPokemonPokeIdRatingGet$Json.PATH, 'get');
  if (params) {
    rb.path('PokeId', params.PokeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
    })
  );
}

apiPokemonPokeIdRatingGet$Json.PATH = '/api/Pokemon/{PokeId}/rating';
