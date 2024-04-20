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

export class AppStoreVersionExperimentAttributes {
    'name'?: string;
    'trafficProportion'?: number;
    'state'?: AppStoreVersionExperimentAttributesStateEnum;
    'reviewRequired'?: boolean;
    'startDate'?: Date;
    'endDate'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "trafficProportion",
            "baseName": "trafficProportion",
            "type": "number",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "AppStoreVersionExperimentAttributesStateEnum",
            "format": ""
        },
        {
            "name": "reviewRequired",
            "baseName": "reviewRequired",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return AppStoreVersionExperimentAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppStoreVersionExperimentAttributesStateEnum {
    PrepareForSubmission = 'PREPARE_FOR_SUBMISSION',
    ReadyForReview = 'READY_FOR_REVIEW',
    WaitingForReview = 'WAITING_FOR_REVIEW',
    InReview = 'IN_REVIEW',
    Accepted = 'ACCEPTED',
    Approved = 'APPROVED',
    Rejected = 'REJECTED',
    Completed = 'COMPLETED',
    Stopped = 'STOPPED'
}

