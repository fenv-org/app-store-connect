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

import { AppClipAdvancedExperienceImageUpdateRequestDataAttributes } from '../models/AppClipAdvancedExperienceImageUpdateRequestDataAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionAppStoreReviewScreenshotUpdateRequestData {
    'type': SubscriptionAppStoreReviewScreenshotUpdateRequestDataTypeEnum;
    'id': string;
    'attributes'?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionAppStoreReviewScreenshotUpdateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppClipAdvancedExperienceImageUpdateRequestDataAttributes",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionAppStoreReviewScreenshotUpdateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum SubscriptionAppStoreReviewScreenshotUpdateRequestDataTypeEnum {
    SubscriptionAppStoreReviewScreenshots = 'subscriptionAppStoreReviewScreenshots'
}

