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

import { Platform } from '../models/Platform.ts';
import { HttpFile } from '../http/http.ts';

export class ReviewSubmissionAttributes {
    'platform'?: Platform;
    'submittedDate'?: Date;
    'state'?: ReviewSubmissionAttributesStateEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "platform",
            "baseName": "platform",
            "type": "Platform",
            "format": ""
        },
        {
            "name": "submittedDate",
            "baseName": "submittedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ReviewSubmissionAttributesStateEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReviewSubmissionAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ReviewSubmissionAttributesStateEnum {
    ReadyForReview = 'READY_FOR_REVIEW',
    WaitingForReview = 'WAITING_FOR_REVIEW',
    InReview = 'IN_REVIEW',
    UnresolvedIssues = 'UNRESOLVED_ISSUES',
    Canceling = 'CANCELING',
    Completing = 'COMPLETING',
    Complete = 'COMPLETE'
}
