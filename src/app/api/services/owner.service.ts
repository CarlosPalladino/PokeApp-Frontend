/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiOwnerGet$Json } from '../fn/owner/api-owner-get-json';
import { ApiOwnerGet$Json$Params } from '../fn/owner/api-owner-get-json';
import { apiOwnerGet$Plain } from '../fn/owner/api-owner-get-plain';
import { ApiOwnerGet$Plain$Params } from '../fn/owner/api-owner-get-plain';
import { apiOwnerOwnerIdDelete } from '../fn/owner/api-owner-owner-id-delete';
import { ApiOwnerOwnerIdDelete$Params } from '../fn/owner/api-owner-owner-id-delete';
import { apiOwnerOwnerIdGet$Json } from '../fn/owner/api-owner-owner-id-get-json';
import { ApiOwnerOwnerIdGet$Json$Params } from '../fn/owner/api-owner-owner-id-get-json';
import { apiOwnerOwnerIdGet$Plain } from '../fn/owner/api-owner-owner-id-get-plain';
import { ApiOwnerOwnerIdGet$Plain$Params } from '../fn/owner/api-owner-owner-id-get-plain';
import { apiOwnerOwnerIdPokemonGet$Json } from '../fn/owner/api-owner-owner-id-pokemon-get-json';
import { ApiOwnerOwnerIdPokemonGet$Json$Params } from '../fn/owner/api-owner-owner-id-pokemon-get-json';
import { apiOwnerOwnerIdPokemonGet$Plain } from '../fn/owner/api-owner-owner-id-pokemon-get-plain';
import { ApiOwnerOwnerIdPokemonGet$Plain$Params } from '../fn/owner/api-owner-owner-id-pokemon-get-plain';
import { apiOwnerOwnerIdPut } from '../fn/owner/api-owner-owner-id-put';
import { ApiOwnerOwnerIdPut$Params } from '../fn/owner/api-owner-owner-id-put';
import { apiOwnerPost } from '../fn/owner/api-owner-post';
import { ApiOwnerPost$Params } from '../fn/owner/api-owner-post';
import { Owner } from '../models/owner';

@Injectable({ providedIn: 'root' })
export class OwnerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiOwnerGet()` */
  static readonly ApiOwnerGetPath = '/api/Owner';


  // obtener nombre del owner

  getOwnerIdByName(name: string): Observable<number> {
    return this.http.get(`/api/owners`).pipe(
      map(response => response as any[]),
      map((owners: any[]) => {
        const owner = owners.find(owner => owner.firstName === name);
        return owner ? owner.id : null;
      })
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOwnerGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOwnerGet$Plain$Response(params?: ApiOwnerGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Owner>>> {
    return apiOwnerGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOwnerGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOwnerGet$Plain(params?: ApiOwnerGet$Plain$Params, context?: HttpContext): Observable<Array<Owner>> {
    return this.apiOwnerGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Owner>>): Array<Owner> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOwnerGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOwnerGet$Json$Response(params?: ApiOwnerGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Owner>>> {
    return apiOwnerGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOwnerGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOwnerGet$Json(params?: ApiOwnerGet$Json$Params, context?: HttpContext): Observable<Array<Owner>> {
    return this.apiOwnerGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Owner>>): Array<Owner> => r.body)
    );
  }

  /** Path part for operation `apiOwnerPost()` */
  static readonly ApiOwnerPostPath = '/api/Owner';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOwnerPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOwnerPost$Response(params?: ApiOwnerPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiOwnerPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOwnerPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOwnerPost(params?: ApiOwnerPost$Params, context?: HttpContext): Observable<void> {
    return this.apiOwnerPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiOwnerOwnerIdGet()` */
  static readonly ApiOwnerOwnerIdGetPath = '/api/Owner/{ownerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOwnerOwnerIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOwnerOwnerIdGet$Plain$Response(params: ApiOwnerOwnerIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Owner>> {
    return apiOwnerOwnerIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOwnerOwnerIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOwnerOwnerIdGet$Plain(params: ApiOwnerOwnerIdGet$Plain$Params, context?: HttpContext): Observable<Owner> {
    return this.apiOwnerOwnerIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Owner>): Owner => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOwnerOwnerIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOwnerOwnerIdGet$Json$Response(params: ApiOwnerOwnerIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Owner>> {
    return apiOwnerOwnerIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOwnerOwnerIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOwnerOwnerIdGet$Json(params: ApiOwnerOwnerIdGet$Json$Params, context?: HttpContext): Observable<Owner> {
    return this.apiOwnerOwnerIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Owner>): Owner => r.body)
    );
  }

  /** Path part for operation `apiOwnerOwnerIdPut()` */
  static readonly ApiOwnerOwnerIdPutPath = '/api/Owner/{ownerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOwnerOwnerIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOwnerOwnerIdPut$Response(params: ApiOwnerOwnerIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiOwnerOwnerIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOwnerOwnerIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOwnerOwnerIdPut(params: ApiOwnerOwnerIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiOwnerOwnerIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiOwnerOwnerIdDelete()` */
  static readonly ApiOwnerOwnerIdDeletePath = '/api/Owner/{ownerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOwnerOwnerIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOwnerOwnerIdDelete$Response(params: ApiOwnerOwnerIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiOwnerOwnerIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOwnerOwnerIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOwnerOwnerIdDelete(params: ApiOwnerOwnerIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiOwnerOwnerIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiOwnerOwnerIdPokemonGet()` */
  static readonly ApiOwnerOwnerIdPokemonGetPath = '/api/Owner/{ownerId}/pokemon';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOwnerOwnerIdPokemonGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOwnerOwnerIdPokemonGet$Plain$Response(params: ApiOwnerOwnerIdPokemonGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Owner>> {
    return apiOwnerOwnerIdPokemonGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOwnerOwnerIdPokemonGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOwnerOwnerIdPokemonGet$Plain(params: ApiOwnerOwnerIdPokemonGet$Plain$Params, context?: HttpContext): Observable<Owner> {
    return this.apiOwnerOwnerIdPokemonGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Owner>): Owner => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOwnerOwnerIdPokemonGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOwnerOwnerIdPokemonGet$Json$Response(params: ApiOwnerOwnerIdPokemonGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Owner>> {
    return apiOwnerOwnerIdPokemonGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOwnerOwnerIdPokemonGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOwnerOwnerIdPokemonGet$Json(params: ApiOwnerOwnerIdPokemonGet$Json$Params, context?: HttpContext): Observable<Owner> {
    return this.apiOwnerOwnerIdPokemonGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Owner>): Owner => r.body)
    );
  }

}
