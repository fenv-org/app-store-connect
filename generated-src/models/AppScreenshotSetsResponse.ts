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
import { PagedDocumentLinks } from '../models/PagedDocumentLinks.ts';
import { PagingInformation } from '../models/PagingInformation.ts';
import { HttpFile } from '../http/http.ts';

export class AppScreenshotSetsResponse {
    'data': Array<AppScreenshotSet>;
    'included'?: Array<AppScreenshotSetsResponseIncludedInner>;
    'links': PagedDocumentLinks;
    'meta'?: PagingInformation;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<AppScreenshotSet>",
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
            "type": "PagedDocumentLinks",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "PagingInformation",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppScreenshotSetsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
