/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 3.4.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export enum BetaReviewState {
    WaitingForReview = 'WAITING_FOR_REVIEW',
    InReview = 'IN_REVIEW',
    Rejected = 'REJECTED',
    Approved = 'APPROVED'
}
