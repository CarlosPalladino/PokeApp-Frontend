/* tslint:disable */
/* eslint-disable */
import { Review } from '../models/review';
export interface Reviewer {
  firstName?: null | string;
  id?: number;
  lastName?: null | string;
  reviews?: null | Array<Review>;
}
