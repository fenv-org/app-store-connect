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

import { DocumentLinks } from '../models/DocumentLinks.ts';
import { InAppPurchasePriceSchedule } from '../models/InAppPurchasePriceSchedule.ts';
import { InAppPurchasePriceScheduleResponseIncludedInner } from '../models/InAppPurchasePriceScheduleResponseIncludedInner.ts';
import { HttpFile } from '../http/http.ts';

export class InAppPurchasePriceScheduleResponse {
    'data': InAppPurchasePriceSchedule;
    'included'?: Array<InAppPurchasePriceScheduleResponseIncludedInner>;
    'links': DocumentLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "InAppPurchasePriceSchedule",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<InAppPurchasePriceScheduleResponseIncludedInner>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InAppPurchasePriceScheduleResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
