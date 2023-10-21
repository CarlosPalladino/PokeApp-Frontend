/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCategoryCategoryIdDelete } from '../fn/category/api-category-category-id-delete';
import { ApiCategoryCategoryIdDelete$Params } from '../fn/category/api-category-category-id-delete';
import { apiCategoryCategoryIdGet$Json } from '../fn/category/api-category-category-id-get-json';
import { ApiCategoryCategoryIdGet$Json$Params } from '../fn/category/api-category-category-id-get-json';
import { apiCategoryCategoryIdGet$Plain } from '../fn/category/api-category-category-id-get-plain';
import { ApiCategoryCategoryIdGet$Plain$Params } from '../fn/category/api-category-category-id-get-plain';
import { apiCategoryCategoryIdPut } from '../fn/category/api-category-category-id-put';
import { ApiCategoryCategoryIdPut$Params } from '../fn/category/api-category-category-id-put';
import { apiCategoryGet$Json } from '../fn/category/api-category-get-json';
import { ApiCategoryGet$Json$Params } from '../fn/category/api-category-get-json';
import { apiCategoryGet$Plain } from '../fn/category/api-category-get-plain';
import { ApiCategoryGet$Plain$Params } from '../fn/category/api-category-get-plain';
import { apiCategoryPokemonCategoryIdGet$Json } from '../fn/category/api-category-pokemon-category-id-get-json';
import { ApiCategoryPokemonCategoryIdGet$Json$Params } from '../fn/category/api-category-pokemon-category-id-get-json';
import { apiCategoryPokemonCategoryIdGet$Plain } from '../fn/category/api-category-pokemon-category-id-get-plain';
import { ApiCategoryPokemonCategoryIdGet$Plain$Params } from '../fn/category/api-category-pokemon-category-id-get-plain';
import { apiCategoryPost } from '../fn/category/api-category-post';
import { ApiCategoryPost$Params } from '../fn/category/api-category-post';
import { Category } from '../models/category';
import { Pokemons } from '../models/pokemons';

@Injectable({ providedIn: 'root' })
export class CategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCategoryGet()` */
  static readonly ApiCategoryGetPath = '/api/Category';



// obtener el nombre de la category 


getCategoryIdByName(name: string): Observable<number> {
  return this.http.get(`/api/categories`).pipe(
    map(response => response as any[]),
    map((categories: any[]) => {
      const category = categories.find(category => category.name === name);
      return category ? category.id : null;
    })
  );
}


  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Plain$Response(params?: ApiCategoryGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Category>>> {
    return apiCategoryGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Plain(params?: ApiCategoryGet$Plain$Params, context?: HttpContext): Observable<Array<Category>> {
    return this.apiCategoryGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Category>>): Array<Category> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Json$Response(params?: ApiCategoryGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Category>>> {
    return apiCategoryGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Json(params?: ApiCategoryGet$Json$Params, context?: HttpContext): Observable<Array<Category>> {
    return this.apiCategoryGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Category>>): Array<Category> => r.body)
    );
  }

  /** Path part for operation `apiCategoryPost()` */
  static readonly ApiCategoryPostPath = '/api/Category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPost$Response(params?: ApiCategoryPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCategoryPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPost(params?: ApiCategoryPost$Params, context?: HttpContext): Observable<void> {
    return this.apiCategoryPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCategoryCategoryIdGet()` */
  static readonly ApiCategoryCategoryIdGetPath = '/api/Category/{CategoryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryCategoryIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryCategoryIdGet$Plain$Response(params: ApiCategoryCategoryIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Category>> {
    return apiCategoryCategoryIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryCategoryIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryCategoryIdGet$Plain(params: ApiCategoryCategoryIdGet$Plain$Params, context?: HttpContext): Observable<Category> {
    return this.apiCategoryCategoryIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Category>): Category => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryCategoryIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryCategoryIdGet$Json$Response(params: ApiCategoryCategoryIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Category>> {
    return apiCategoryCategoryIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryCategoryIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryCategoryIdGet$Json(params: ApiCategoryCategoryIdGet$Json$Params, context?: HttpContext): Observable<Category> {
    return this.apiCategoryCategoryIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Category>): Category => r.body)
    );
  }

  /** Path part for operation `apiCategoryPokemonCategoryIdGet()` */
  static readonly ApiCategoryPokemonCategoryIdGetPath = '/api/Category/pokemon/{categoryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryPokemonCategoryIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryPokemonCategoryIdGet$Plain$Response(params: ApiCategoryPokemonCategoryIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Pokemons>>> {
    return apiCategoryPokemonCategoryIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryPokemonCategoryIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryPokemonCategoryIdGet$Plain(params: ApiCategoryPokemonCategoryIdGet$Plain$Params, context?: HttpContext): Observable<Array<Pokemons>> {
    return this.apiCategoryPokemonCategoryIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Pokemons>>): Array<Pokemons> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryPokemonCategoryIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryPokemonCategoryIdGet$Json$Response(params: ApiCategoryPokemonCategoryIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Pokemons>>> {
    return apiCategoryPokemonCategoryIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryPokemonCategoryIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryPokemonCategoryIdGet$Json(params: ApiCategoryPokemonCategoryIdGet$Json$Params, context?: HttpContext): Observable<Array<Pokemons>> {
    return this.apiCategoryPokemonCategoryIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Pokemons>>): Array<Pokemons> => r.body)
    );
  }

  /** Path part for operation `apiCategoryCategoryIdPut()` */
  static readonly ApiCategoryCategoryIdPutPath = '/api/Category/{categoryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryCategoryIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryCategoryIdPut$Response(params: ApiCategoryCategoryIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCategoryCategoryIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryCategoryIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryCategoryIdPut(params: ApiCategoryCategoryIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiCategoryCategoryIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCategoryCategoryIdDelete()` */
  static readonly ApiCategoryCategoryIdDeletePath = '/api/Category/{categoryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryCategoryIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryCategoryIdDelete$Response(params: ApiCategoryCategoryIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCategoryCategoryIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryCategoryIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryCategoryIdDelete(params: ApiCategoryCategoryIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiCategoryCategoryIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
