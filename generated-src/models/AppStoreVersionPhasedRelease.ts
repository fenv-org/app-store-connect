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

import { AppStoreVersionPhasedReleaseAttributes } from '../models/AppStoreVersionPhasedReleaseAttributes.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class AppStoreVersionPhasedRelease {
    'type': AppStoreVersionPhasedReleaseTypeEnum;
    'id': string;
    'attributes'?: AppStoreVersionPhasedReleaseAttributes;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppStoreVersionPhasedReleaseTypeEnum",
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
            "type": "AppStoreVersionPhasedReleaseAttributes",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppStoreVersionPhasedRelease.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppStoreVersionPhasedReleaseTypeEnum {
    AppStoreVersionPhasedReleases = 'appStoreVersionPhasedReleases'
}

