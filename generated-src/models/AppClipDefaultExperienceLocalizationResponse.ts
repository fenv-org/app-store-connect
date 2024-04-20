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

import { AppClipDefaultExperienceLocalization } from '../models/AppClipDefaultExperienceLocalization.ts';
import { AppClipDefaultExperienceLocalizationsResponseIncludedInner } from '../models/AppClipDefaultExperienceLocalizationsResponseIncludedInner.ts';
import { DocumentLinks } from '../models/DocumentLinks.ts';
import { HttpFile } from '../http/http.ts';

export class AppClipDefaultExperienceLocalizationResponse {
    'data': AppClipDefaultExperienceLocalization;
    'included'?: Array<AppClipDefaultExperienceLocalizationsResponseIncludedInner>;
    'links': DocumentLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppClipDefaultExperienceLocalization",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppClipDefaultExperienceLocalizationsResponseIncludedInner>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppClipDefaultExperienceLocalizationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

