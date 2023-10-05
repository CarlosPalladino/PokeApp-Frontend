/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCountryCountryIdDelete } from '../fn/country/api-country-country-id-delete';
import { ApiCountryCountryIdDelete$Params } from '../fn/country/api-country-country-id-delete';
import { apiCountryCountryIdGet$Json } from '../fn/country/api-country-country-id-get-json';
import { ApiCountryCountryIdGet$Json$Params } from '../fn/country/api-country-country-id-get-json';
import { apiCountryCountryIdGet$Plain } from '../fn/country/api-country-country-id-get-plain';
import { ApiCountryCountryIdGet$Plain$Params } from '../fn/country/api-country-country-id-get-plain';
import { apiCountryCountryIdPut } from '../fn/country/api-country-country-id-put';
import { ApiCountryCountryIdPut$Params } from '../fn/country/api-country-country-id-put';
import { apiCountryGet$Json } from '../fn/country/api-country-get-json';
import { ApiCountryGet$Json$Params } from '../fn/country/api-country-get-json';
import { apiCountryGet$Plain } from '../fn/country/api-country-get-plain';
import { ApiCountryGet$Plain$Params } from '../fn/country/api-country-get-plain';
import { apiCountryPost } from '../fn/country/api-country-post';
import { ApiCountryPost$Params } from '../fn/country/api-country-post';
import { Country } from '../models/country';
import { ownersOwnerIdGet$Json } from '../fn/country/owners-owner-id-get-json';
import { OwnersOwnerIdGet$Json$Params } from '../fn/country/owners-owner-id-get-json';
import { ownersOwnerIdGet$Plain } from '../fn/country/owners-owner-id-get-plain';
import { OwnersOwnerIdGet$Plain$Params } from '../fn/country/owners-owner-id-get-plain';
import { Pokemons } from '../models/pokemons';

@Injectable({ providedIn: 'root' })
export class CountryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCountryGet()` */
  static readonly ApiCountryGetPath = '/api/Country';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCountryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountryGet$Plain$Response(params?: ApiCountryGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Country>>> {
    return apiCountryGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCountryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountryGet$Plain(params?: ApiCountryGet$Plain$Params, context?: HttpContext): Observable<Array<Country>> {
    return this.apiCountryGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Country>>): Array<Country> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCountryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountryGet$Json$Response(params?: ApiCountryGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Country>>> {
    return apiCountryGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCountryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountryGet$Json(params?: ApiCountryGet$Json$Params, context?: HttpContext): Observable<Array<Country>> {
    return this.apiCountryGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Country>>): Array<Country> => r.body)
    );
  }

  /** Path part for operation `apiCountryPost()` */
  static readonly ApiCountryPostPath = '/api/Country';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCountryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCountryPost$Response(params?: ApiCountryPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCountryPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCountryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCountryPost(params?: ApiCountryPost$Params, context?: HttpContext): Observable<void> {
    return this.apiCountryPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCountryCountryIdGet()` */
  static readonly ApiCountryCountryIdGetPath = '/api/Country/{countryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCountryCountryIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountryCountryIdGet$Plain$Response(params: ApiCountryCountryIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Pokemons>> {
    return apiCountryCountryIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCountryCountryIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountryCountryIdGet$Plain(params: ApiCountryCountryIdGet$Plain$Params, context?: HttpContext): Observable<Pokemons> {
    return this.apiCountryCountryIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Pokemons>): Pokemons => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCountryCountryIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountryCountryIdGet$Json$Response(params: ApiCountryCountryIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Pokemons>> {
    return apiCountryCountryIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCountryCountryIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountryCountryIdGet$Json(params: ApiCountryCountryIdGet$Json$Params, context?: HttpContext): Observable<Pokemons> {
    return this.apiCountryCountryIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Pokemons>): Pokemons => r.body)
    );
  }

  /** Path part for operation `apiCountryCountryIdPut()` */
  static readonly ApiCountryCountryIdPutPath = '/api/Country/{countryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCountryCountryIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCountryCountryIdPut$Response(params: ApiCountryCountryIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCountryCountryIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCountryCountryIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCountryCountryIdPut(params: ApiCountryCountryIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiCountryCountryIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCountryCountryIdDelete()` */
  static readonly ApiCountryCountryIdDeletePath = '/api/Country/{countryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCountryCountryIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountryCountryIdDelete$Response(params: ApiCountryCountryIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCountryCountryIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCountryCountryIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountryCountryIdDelete(params: ApiCountryCountryIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiCountryCountryIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `ownersOwnerIdGet()` */
  static readonly OwnersOwnerIdGetPath = '/owners/{ownerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ownersOwnerIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  ownersOwnerIdGet$Plain$Response(params: OwnersOwnerIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Country>> {
    return ownersOwnerIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ownersOwnerIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ownersOwnerIdGet$Plain(params: OwnersOwnerIdGet$Plain$Params, context?: HttpContext): Observable<Country> {
    return this.ownersOwnerIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Country>): Country => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ownersOwnerIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  ownersOwnerIdGet$Json$Response(params: OwnersOwnerIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Country>> {
    return ownersOwnerIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ownersOwnerIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ownersOwnerIdGet$Json(params: OwnersOwnerIdGet$Json$Params, context?: HttpContext): Observable<Country> {
    return this.ownersOwnerIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Country>): Country => r.body)
    );
  }

}
