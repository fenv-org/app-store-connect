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

import { AppCustomProductPageLocalization } from '../models/AppCustomProductPageLocalization.ts';
import { AppCustomProductPageLocalizationsResponseIncludedInner } from '../models/AppCustomProductPageLocalizationsResponseIncludedInner.ts';
import { DocumentLinks } from '../models/DocumentLinks.ts';
import { HttpFile } from '../http/http.ts';

export class AppCustomProductPageLocalizationResponse {
    'data': AppCustomProductPageLocalization;
    'included'?: Array<AppCustomProductPageLocalizationsResponseIncludedInner>;
    'links': DocumentLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppCustomProductPageLocalization",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppCustomProductPageLocalizationsResponseIncludedInner>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppCustomProductPageLocalizationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
