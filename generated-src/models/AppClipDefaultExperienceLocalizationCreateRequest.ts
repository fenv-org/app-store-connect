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

import { AppClipDefaultExperienceLocalizationCreateRequestData } from '../models/AppClipDefaultExperienceLocalizationCreateRequestData.ts';
import { HttpFile } from '../http/http.ts';

export class AppClipDefaultExperienceLocalizationCreateRequest {
    'data': AppClipDefaultExperienceLocalizationCreateRequestData;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppClipDefaultExperienceLocalizationCreateRequestData",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppClipDefaultExperienceLocalizationCreateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

