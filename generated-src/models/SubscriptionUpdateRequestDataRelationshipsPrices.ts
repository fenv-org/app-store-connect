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

import { SubscriptionRelationshipsPricesDataInner } from '../models/SubscriptionRelationshipsPricesDataInner.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionUpdateRequestDataRelationshipsPrices {
    'data'?: Array<SubscriptionRelationshipsPricesDataInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<SubscriptionRelationshipsPricesDataInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionUpdateRequestDataRelationshipsPrices.attributeTypeMap;
    }

    public constructor() {
    }
}

