/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiReviewsGet$Json } from '../fn/reviews/api-reviews-get-json';
import { ApiReviewsGet$Json$Params } from '../fn/reviews/api-reviews-get-json';
import { apiReviewsGet$Plain } from '../fn/reviews/api-reviews-get-plain';
import { ApiReviewsGet$Plain$Params } from '../fn/reviews/api-reviews-get-plain';
import { apiReviewsPokemonPokeIdGet$Json } from '../fn/reviews/api-reviews-pokemon-poke-id-get-json';
import { ApiReviewsPokemonPokeIdGet$Json$Params } from '../fn/reviews/api-reviews-pokemon-poke-id-get-json';
import { apiReviewsPokemonPokeIdGet$Plain } from '../fn/reviews/api-reviews-pokemon-poke-id-get-plain';
import { ApiReviewsPokemonPokeIdGet$Plain$Params } from '../fn/reviews/api-reviews-pokemon-poke-id-get-plain';
import { apiReviewsPost } from '../fn/reviews/api-reviews-post';
import { ApiReviewsPost$Params } from '../fn/reviews/api-reviews-post';
import { apiReviewsReviewIdDelete } from '../fn/reviews/api-reviews-review-id-delete';
import { ApiReviewsReviewIdDelete$Params } from '../fn/reviews/api-reviews-review-id-delete';
import { apiReviewsReviewIdGet$Json } from '../fn/reviews/api-reviews-review-id-get-json';
import { ApiReviewsReviewIdGet$Json$Params } from '../fn/reviews/api-reviews-review-id-get-json';
import { apiReviewsReviewIdGet$Plain } from '../fn/reviews/api-reviews-review-id-get-plain';
import { ApiReviewsReviewIdGet$Plain$Params } from '../fn/reviews/api-reviews-review-id-get-plain';
import { apiReviewsReviewIdPut } from '../fn/reviews/api-reviews-review-id-put';
import { ApiReviewsReviewIdPut$Params } from '../fn/reviews/api-reviews-review-id-put';
import { Review } from '../models/review';

@Injectable({ providedIn: 'root' })
export class ReviewsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiReviewsGet()` */
  static readonly ApiReviewsGetPath = '/api/Reviews';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewsGet$Plain$Response(params?: ApiReviewsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Review>>> {
    return apiReviewsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewsGet$Plain(params?: ApiReviewsGet$Plain$Params, context?: HttpContext): Observable<Array<Review>> {
    return this.apiReviewsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Review>>): Array<Review> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewsGet$Json$Response(params?: ApiReviewsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Review>>> {
    return apiReviewsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewsGet$Json(params?: ApiReviewsGet$Json$Params, context?: HttpContext): Observable<Array<Review>> {
    return this.apiReviewsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Review>>): Array<Review> => r.body)
    );
  }

  /** Path part for operation `apiReviewsPost()` */
  static readonly ApiReviewsPostPath = '/api/Reviews';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewsPost$Response(params?: ApiReviewsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiReviewsPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewsPost(params?: ApiReviewsPost$Params, context?: HttpContext): Observable<void> {
    return this.apiReviewsPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiReviewsReviewIdGet()` */
  static readonly ApiReviewsReviewIdGetPath = '/api/Reviews/{ReviewId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewsReviewIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewsReviewIdGet$Plain$Response(params: ApiReviewsReviewIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Review>> {
    return apiReviewsReviewIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewsReviewIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewsReviewIdGet$Plain(params: ApiReviewsReviewIdGet$Plain$Params, context?: HttpContext): Observable<Review> {
    return this.apiReviewsReviewIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Review>): Review => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewsReviewIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewsReviewIdGet$Json$Response(params: ApiReviewsReviewIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Review>> {
    return apiReviewsReviewIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewsReviewIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewsReviewIdGet$Json(params: ApiReviewsReviewIdGet$Json$Params, context?: HttpContext): Observable<Review> {
    return this.apiReviewsReviewIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Review>): Review => r.body)
    );
  }

  /** Path part for operation `apiReviewsPokemonPokeIdGet()` */
  static readonly ApiReviewsPokemonPokeIdGetPath = '/api/Reviews/pokemon/{PokeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewsPokemonPokeIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewsPokemonPokeIdGet$Plain$Response(params: ApiReviewsPokemonPokeIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Review>> {
    return apiReviewsPokemonPokeIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewsPokemonPokeIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewsPokemonPokeIdGet$Plain(params: ApiReviewsPokemonPokeIdGet$Plain$Params, context?: HttpContext): Observable<Review> {
    return this.apiReviewsPokemonPokeIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Review>): Review => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewsPokemonPokeIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewsPokemonPokeIdGet$Json$Response(params: ApiReviewsPokemonPokeIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Review>> {
    return apiReviewsPokemonPokeIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewsPokemonPokeIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewsPokemonPokeIdGet$Json(params: ApiReviewsPokemonPokeIdGet$Json$Params, context?: HttpContext): Observable<Review> {
    return this.apiReviewsPokemonPokeIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Review>): Review => r.body)
    );
  }

  /** Path part for operation `apiReviewsReviewIdPut()` */
  static readonly ApiReviewsReviewIdPutPath = '/api/Reviews/{reviewId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewsReviewIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewsReviewIdPut$Response(params: ApiReviewsReviewIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiReviewsReviewIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewsReviewIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewsReviewIdPut(params: ApiReviewsReviewIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiReviewsReviewIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiReviewsReviewIdDelete()` */
  static readonly ApiReviewsReviewIdDeletePath = '/api/Reviews/{reviewId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewsReviewIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewsReviewIdDelete$Response(params: ApiReviewsReviewIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiReviewsReviewIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewsReviewIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewsReviewIdDelete(params: ApiReviewsReviewIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiReviewsReviewIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
