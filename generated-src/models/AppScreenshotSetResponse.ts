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

import { AppScreenshotSet } from '../models/AppScreenshotSet.ts';
import { AppScreenshotSetsResponseIncludedInner } from '../models/AppScreenshotSetsResponseIncludedInner.ts';
import { DocumentLinks } from '../models/DocumentLinks.ts';
import { HttpFile } from '../http/http.ts';

export class AppScreenshotSetResponse {
    'data': AppScreenshotSet;
    'included'?: Array<AppScreenshotSetsResponseIncludedInner>;
    'links': DocumentLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppScreenshotSet",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppScreenshotSetsResponseIncludedInner>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppScreenshotSetResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

