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

import { InAppPurchaseV2CreateRequestData } from '../models/InAppPurchaseV2CreateRequestData.ts';
import { HttpFile } from '../http/http.ts';

export class InAppPurchaseV2CreateRequest {
    'data': InAppPurchaseV2CreateRequestData;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "InAppPurchaseV2CreateRequestData",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InAppPurchaseV2CreateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

