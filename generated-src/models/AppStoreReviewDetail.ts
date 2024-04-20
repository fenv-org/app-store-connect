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

import { AppStoreReviewDetailAttributes } from '../models/AppStoreReviewDetailAttributes.ts';
import { AppStoreReviewDetailRelationships } from '../models/AppStoreReviewDetailRelationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class AppStoreReviewDetail {
    'type': AppStoreReviewDetailTypeEnum;
    'id': string;
    'attributes'?: AppStoreReviewDetailAttributes;
    'relationships'?: AppStoreReviewDetailRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppStoreReviewDetailTypeEnum",
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
            "type": "AppStoreReviewDetailAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppStoreReviewDetailRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppStoreReviewDetail.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppStoreReviewDetailTypeEnum {
    AppStoreReviewDetails = 'appStoreReviewDetails'
}

