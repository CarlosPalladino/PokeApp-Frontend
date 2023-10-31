/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
 import { HttpClient,HttpHeaders } from '@angular/common/http';
/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'https://localhost:7215';
}

/**
 * Parameters for `ApiModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}
