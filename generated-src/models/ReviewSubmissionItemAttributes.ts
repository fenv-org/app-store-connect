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

export class ReviewSubmissionItemAttributes {
    'state'?: ReviewSubmissionItemAttributesStateEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "state",
            "baseName": "state",
            "type": "ReviewSubmissionItemAttributesStateEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReviewSubmissionItemAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ReviewSubmissionItemAttributesStateEnum {
    ReadyForReview = 'READY_FOR_REVIEW',
    Accepted = 'ACCEPTED',
    Approved = 'APPROVED',
    Rejected = 'REJECTED',
    Removed = 'REMOVED'
}

