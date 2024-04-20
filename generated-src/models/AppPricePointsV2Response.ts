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

import { AppPricePointV2 } from '../models/AppPricePointV2.ts';
import { AppPricePointsV2ResponseIncludedInner } from '../models/AppPricePointsV2ResponseIncludedInner.ts';
import { PagedDocumentLinks } from '../models/PagedDocumentLinks.ts';
import { PagingInformation } from '../models/PagingInformation.ts';
import { HttpFile } from '../http/http.ts';

export class AppPricePointsV2Response {
    'data': Array<AppPricePointV2>;
    'included'?: Array<AppPricePointsV2ResponseIncludedInner>;
    'links': PagedDocumentLinks;
    'meta'?: PagingInformation;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<AppPricePointV2>",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppPricePointsV2ResponseIncludedInner>",
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
        return AppPricePointsV2Response.attributeTypeMap;
    }

    public constructor() {
    }
}
