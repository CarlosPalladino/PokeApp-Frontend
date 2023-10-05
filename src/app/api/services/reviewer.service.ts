/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiReviewerGet$Json } from '../fn/reviewer/api-reviewer-get-json';
import { ApiReviewerGet$Json$Params } from '../fn/reviewer/api-reviewer-get-json';
import { apiReviewerGet$Plain } from '../fn/reviewer/api-reviewer-get-plain';
import { ApiReviewerGet$Plain$Params } from '../fn/reviewer/api-reviewer-get-plain';
import { apiReviewerPost } from '../fn/reviewer/api-reviewer-post';
import { ApiReviewerPost$Params } from '../fn/reviewer/api-reviewer-post';
import { apiReviewerReviewerIdDelete } from '../fn/reviewer/api-reviewer-reviewer-id-delete';
import { ApiReviewerReviewerIdDelete$Params } from '../fn/reviewer/api-reviewer-reviewer-id-delete';
import { apiReviewerReviewerIdGet$Json } from '../fn/reviewer/api-reviewer-reviewer-id-get-json';
import { ApiReviewerReviewerIdGet$Json$Params } from '../fn/reviewer/api-reviewer-reviewer-id-get-json';
import { apiReviewerReviewerIdGet$Plain } from '../fn/reviewer/api-reviewer-reviewer-id-get-plain';
import { ApiReviewerReviewerIdGet$Plain$Params } from '../fn/reviewer/api-reviewer-reviewer-id-get-plain';
import { apiReviewerReviewerIdPut } from '../fn/reviewer/api-reviewer-reviewer-id-put';
import { ApiReviewerReviewerIdPut$Params } from '../fn/reviewer/api-reviewer-reviewer-id-put';
import { apiReviewerReviewerIdReviewsGet } from '../fn/reviewer/api-reviewer-reviewer-id-reviews-get';
import { ApiReviewerReviewerIdReviewsGet$Params } from '../fn/reviewer/api-reviewer-reviewer-id-reviews-get';
import { Reviewer } from '../models/reviewer';

@Injectable({ providedIn: 'root' })
export class ReviewerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiReviewerGet()` */
  static readonly ApiReviewerGetPath = '/api/Reviewer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewerGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewerGet$Plain$Response(params?: ApiReviewerGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Reviewer>>> {
    return apiReviewerGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewerGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewerGet$Plain(params?: ApiReviewerGet$Plain$Params, context?: HttpContext): Observable<Array<Reviewer>> {
    return this.apiReviewerGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Reviewer>>): Array<Reviewer> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewerGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewerGet$Json$Response(params?: ApiReviewerGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Reviewer>>> {
    return apiReviewerGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewerGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewerGet$Json(params?: ApiReviewerGet$Json$Params, context?: HttpContext): Observable<Array<Reviewer>> {
    return this.apiReviewerGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Reviewer>>): Array<Reviewer> => r.body)
    );
  }

  /** Path part for operation `apiReviewerPost()` */
  static readonly ApiReviewerPostPath = '/api/Reviewer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewerPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewerPost$Response(params?: ApiReviewerPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiReviewerPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewerPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewerPost(params?: ApiReviewerPost$Params, context?: HttpContext): Observable<void> {
    return this.apiReviewerPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiReviewerReviewerIdGet()` */
  static readonly ApiReviewerReviewerIdGetPath = '/api/Reviewer/{reviewerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewerReviewerIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewerReviewerIdGet$Plain$Response(params: ApiReviewerReviewerIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Reviewer>> {
    return apiReviewerReviewerIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewerReviewerIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewerReviewerIdGet$Plain(params: ApiReviewerReviewerIdGet$Plain$Params, context?: HttpContext): Observable<Reviewer> {
    return this.apiReviewerReviewerIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Reviewer>): Reviewer => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewerReviewerIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewerReviewerIdGet$Json$Response(params: ApiReviewerReviewerIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Reviewer>> {
    return apiReviewerReviewerIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewerReviewerIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewerReviewerIdGet$Json(params: ApiReviewerReviewerIdGet$Json$Params, context?: HttpContext): Observable<Reviewer> {
    return this.apiReviewerReviewerIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Reviewer>): Reviewer => r.body)
    );
  }

  /** Path part for operation `apiReviewerReviewerIdPut()` */
  static readonly ApiReviewerReviewerIdPutPath = '/api/Reviewer/{reviewerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewerReviewerIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewerReviewerIdPut$Response(params: ApiReviewerReviewerIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiReviewerReviewerIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewerReviewerIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewerReviewerIdPut(params: ApiReviewerReviewerIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiReviewerReviewerIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiReviewerReviewerIdDelete()` */
  static readonly ApiReviewerReviewerIdDeletePath = '/api/Reviewer/{reviewerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewerReviewerIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewerReviewerIdDelete$Response(params: ApiReviewerReviewerIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiReviewerReviewerIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewerReviewerIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewerReviewerIdDelete(params: ApiReviewerReviewerIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiReviewerReviewerIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiReviewerReviewerIdReviewsGet()` */
  static readonly ApiReviewerReviewerIdReviewsGetPath = '/api/Reviewer/{reviewerId}/reviews';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewerReviewerIdReviewsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewerReviewerIdReviewsGet$Response(params: ApiReviewerReviewerIdReviewsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiReviewerReviewerIdReviewsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReviewerReviewerIdReviewsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReviewerReviewerIdReviewsGet(params: ApiReviewerReviewerIdReviewsGet$Params, context?: HttpContext): Observable<void> {
    return this.apiReviewerReviewerIdReviewsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
