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

import { AppPreviewSet } from '../models/AppPreviewSet.ts';
import { AppPreviewSetAttributes } from '../models/AppPreviewSetAttributes.ts';
import { AppPreviewSetRelationships } from '../models/AppPreviewSetRelationships.ts';
import { AppScreenshotSet } from '../models/AppScreenshotSet.ts';
import { AppStoreVersion } from '../models/AppStoreVersion.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class AppStoreVersionLocalizationsResponseIncludedInner {
    'type': AppStoreVersionLocalizationsResponseIncludedInnerTypeEnum;
    'id': string;
    'attributes'?: AppPreviewSetAttributes;
    'relationships'?: AppPreviewSetRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppStoreVersionLocalizationsResponseIncludedInnerTypeEnum",
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
            "type": "AppPreviewSetAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppPreviewSetRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppStoreVersionLocalizationsResponseIncludedInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppStoreVersionLocalizationsResponseIncludedInnerTypeEnum {
    AppStoreVersions = 'appStoreVersions',
    AppScreenshotSets = 'appScreenshotSets',
    AppPreviewSets = 'appPreviewSets'
}
