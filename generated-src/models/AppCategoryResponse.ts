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

import { AppCategory } from '../models/AppCategory.ts';
import { DocumentLinks } from '../models/DocumentLinks.ts';
import { HttpFile } from '../http/http.ts';

export class AppCategoryResponse {
    'data': AppCategory;
    'included'?: Array<AppCategory>;
    'links': DocumentLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppCategory",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppCategory>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppCategoryResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
