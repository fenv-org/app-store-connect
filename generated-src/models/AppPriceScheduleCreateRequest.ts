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

import { AppPriceScheduleCreateRequestData } from '../models/AppPriceScheduleCreateRequestData.ts';
import { AppPriceScheduleCreateRequestIncludedInner } from '../models/AppPriceScheduleCreateRequestIncludedInner.ts';
import { HttpFile } from '../http/http.ts';

export class AppPriceScheduleCreateRequest {
    'data': AppPriceScheduleCreateRequestData;
    'included'?: Array<AppPriceScheduleCreateRequestIncludedInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppPriceScheduleCreateRequestData",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppPriceScheduleCreateRequestIncludedInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppPriceScheduleCreateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

