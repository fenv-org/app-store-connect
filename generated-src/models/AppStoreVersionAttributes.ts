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

import { AppStoreVersionState } from '../models/AppStoreVersionState.ts';
import { AppVersionState } from '../models/AppVersionState.ts';
import { Platform } from '../models/Platform.ts';
import { HttpFile } from '../http/http.ts';

export class AppStoreVersionAttributes {
    'platform'?: Platform;
    'versionString'?: string;
    'appStoreState'?: AppStoreVersionState;
    'appVersionState'?: AppVersionState;
    'copyright'?: string;
    'reviewType'?: AppStoreVersionAttributesReviewTypeEnum;
    'releaseType'?: AppStoreVersionAttributesReleaseTypeEnum;
    'earliestReleaseDate'?: Date;
    'downloadable'?: boolean;
    'createdDate'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "platform",
            "baseName": "platform",
            "type": "Platform",
            "format": ""
        },
        {
            "name": "versionString",
            "baseName": "versionString",
            "type": "string",
            "format": ""
        },
        {
            "name": "appStoreState",
            "baseName": "appStoreState",
            "type": "AppStoreVersionState",
            "format": ""
        },
        {
            "name": "appVersionState",
            "baseName": "appVersionState",
            "type": "AppVersionState",
            "format": ""
        },
        {
            "name": "copyright",
            "baseName": "copyright",
            "type": "string",
            "format": ""
        },
        {
            "name": "reviewType",
            "baseName": "reviewType",
            "type": "AppStoreVersionAttributesReviewTypeEnum",
            "format": ""
        },
        {
            "name": "releaseType",
            "baseName": "releaseType",
            "type": "AppStoreVersionAttributesReleaseTypeEnum",
            "format": ""
        },
        {
            "name": "earliestReleaseDate",
            "baseName": "earliestReleaseDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "downloadable",
            "baseName": "downloadable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return AppStoreVersionAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppStoreVersionAttributesReviewTypeEnum {
    AppStore = 'APP_STORE',
    Notarization = 'NOTARIZATION'
}
export enum AppStoreVersionAttributesReleaseTypeEnum {
    Manual = 'MANUAL',
    AfterApproval = 'AFTER_APPROVAL',
    Scheduled = 'SCHEDULED'
}
