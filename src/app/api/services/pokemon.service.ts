/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiPokemonGet$Json } from '../fn/pokemon/api-pokemon-get-json';
import { ApiPokemonGet$Json$Params } from '../fn/pokemon/api-pokemon-get-json';
import { apiPokemonGet$Plain } from '../fn/pokemon/api-pokemon-get-plain';
import { ApiPokemonGet$Plain$Params } from '../fn/pokemon/api-pokemon-get-plain';
import { apiPokemonPokeIdGet$Json } from '../fn/pokemon/api-pokemon-poke-id-get-json';
import { ApiPokemonPokeIdGet$Json$Params } from '../fn/pokemon/api-pokemon-poke-id-get-json';
import { apiPokemonPokeIdGet$Plain } from '../fn/pokemon/api-pokemon-poke-id-get-plain';
import { ApiPokemonPokeIdGet$Plain$Params } from '../fn/pokemon/api-pokemon-poke-id-get-plain';
import { apiPokemonPokeIdRatingGet$Json } from '../fn/pokemon/api-pokemon-poke-id-rating-get-json';
import { ApiPokemonPokeIdRatingGet$Json$Params } from '../fn/pokemon/api-pokemon-poke-id-rating-get-json';
import { apiPokemonPokeIdRatingGet$Plain } from '../fn/pokemon/api-pokemon-poke-id-rating-get-plain';
import { ApiPokemonPokeIdRatingGet$Plain$Params } from '../fn/pokemon/api-pokemon-poke-id-rating-get-plain';
import { apiPokemonPokemonIdDelete } from '../fn/pokemon/api-pokemon-pokemon-id-delete';
import { ApiPokemonPokemonIdDelete$Params } from '../fn/pokemon/api-pokemon-pokemon-id-delete';
import { apiPokemonPokemonIdPut } from '../fn/pokemon/api-pokemon-pokemon-id-put';
import { ApiPokemonPokemonIdPut$Params } from '../fn/pokemon/api-pokemon-pokemon-id-put';
import { apiPokemonPost } from '../fn/pokemon/api-pokemon-post';
import { ApiPokemonPost$Params } from '../fn/pokemon/api-pokemon-post';
import { Pokemons } from '../models/pokemons';

@Injectable({ providedIn: 'root' })
export class PokemonService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiPokemonGet()` */
  static readonly ApiPokemonGetPath = '/api/Pokemon';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPokemonGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPokemonGet$Plain$Response(params?: ApiPokemonGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Pokemons>>> {
    return apiPokemonGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPokemonGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPokemonGet$Plain(params?: ApiPokemonGet$Plain$Params, context?: HttpContext): Observable<Array<Pokemons>> {
    return this.apiPokemonGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Pokemons>>): Array<Pokemons> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPokemonGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPokemonGet$Json$Response(params?: ApiPokemonGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Pokemons>>> {
    return apiPokemonGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPokemonGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPokemonGet$Json(params?: ApiPokemonGet$Json$Params, context?: HttpContext): Observable<Array<Pokemons>> {
    return this.apiPokemonGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Pokemons>>): Array<Pokemons> => r.body)
    );
  }

  /** Path part for operation `apiPokemonPost()` */
  static readonly ApiPokemonPostPath = '/api/Pokemon';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPokemonPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPokemonPost$Response(params?: ApiPokemonPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiPokemonPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPokemonPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPokemonPost(params?: ApiPokemonPost$Params, context?: HttpContext): Observable<void> {
    return this.apiPokemonPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiPokemonPokeIdGet()` */
  static readonly ApiPokemonPokeIdGetPath = '/api/Pokemon/{PokeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPokemonPokeIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPokemonPokeIdGet$Plain$Response(params: ApiPokemonPokeIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Pokemons>> {
    return apiPokemonPokeIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPokemonPokeIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPokemonPokeIdGet$Plain(params: ApiPokemonPokeIdGet$Plain$Params, context?: HttpContext): Observable<Pokemons> {
    return this.apiPokemonPokeIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Pokemons>): Pokemons => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPokemonPokeIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPokemonPokeIdGet$Json$Response(params: ApiPokemonPokeIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Pokemons>> {
    return apiPokemonPokeIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPokemonPokeIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPokemonPokeIdGet$Json(params: ApiPokemonPokeIdGet$Json$Params, context?: HttpContext): Observable<Pokemons> {
    return this.apiPokemonPokeIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Pokemons>): Pokemons => r.body)
    );
  }

  /** Path part for operation `apiPokemonPokeIdRatingGet()` */
  static readonly ApiPokemonPokeIdRatingGetPath = '/api/Pokemon/{PokeId}/rating';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPokemonPokeIdRatingGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPokemonPokeIdRatingGet$Plain$Response(params: ApiPokemonPokeIdRatingGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return apiPokemonPokeIdRatingGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPokemonPokeIdRatingGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPokemonPokeIdRatingGet$Plain(params: ApiPokemonPokeIdRatingGet$Plain$Params, context?: HttpContext): Observable<number> {
    return this.apiPokemonPokeIdRatingGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPokemonPokeIdRatingGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPokemonPokeIdRatingGet$Json$Response(params: ApiPokemonPokeIdRatingGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return apiPokemonPokeIdRatingGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPokemonPokeIdRatingGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPokemonPokeIdRatingGet$Json(params: ApiPokemonPokeIdRatingGet$Json$Params, context?: HttpContext): Observable<number> {
    return this.apiPokemonPokeIdRatingGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `apiPokemonPokemonIdPut()` */
  static readonly ApiPokemonPokemonIdPutPath = '/api/Pokemon/{pokemonId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPokemonPokemonIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPokemonPokemonIdPut$Response(params: ApiPokemonPokemonIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiPokemonPokemonIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPokemonPokemonIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPokemonPokemonIdPut(params: ApiPokemonPokemonIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiPokemonPokemonIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiPokemonPokemonIdDelete()` */
  static readonly ApiPokemonPokemonIdDeletePath = '/api/Pokemon/{pokemonId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPokemonPokemonIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPokemonPokemonIdDelete$Response(params: ApiPokemonPokemonIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiPokemonPokemonIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPokemonPokemonIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPokemonPokemonIdDelete(params: ApiPokemonPokemonIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiPokemonPokemonIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
