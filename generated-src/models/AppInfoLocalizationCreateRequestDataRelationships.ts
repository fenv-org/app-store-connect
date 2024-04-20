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

import { AppInfoLocalizationCreateRequestDataRelationshipsAppInfo } from '../models/AppInfoLocalizationCreateRequestDataRelationshipsAppInfo.ts';
import { HttpFile } from '../http/http.ts';

export class AppInfoLocalizationCreateRequestDataRelationships {
    'appInfo': AppInfoLocalizationCreateRequestDataRelationshipsAppInfo;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appInfo",
            "baseName": "appInfo",
            "type": "AppInfoLocalizationCreateRequestDataRelationshipsAppInfo",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppInfoLocalizationCreateRequestDataRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}

