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

import { InAppPurchasePriceInlineCreate } from '../models/InAppPurchasePriceInlineCreate.ts';
import { InAppPurchasePriceInlineCreateAttributes } from '../models/InAppPurchasePriceInlineCreateAttributes.ts';
import { InAppPurchasePriceInlineCreateRelationships } from '../models/InAppPurchasePriceInlineCreateRelationships.ts';
import { TerritoryInlineCreate } from '../models/TerritoryInlineCreate.ts';
import { HttpFile } from '../http/http.ts';

export class InAppPurchasePriceScheduleCreateRequestIncludedInner {
    'type': InAppPurchasePriceScheduleCreateRequestIncludedInnerTypeEnum;
    'id'?: string;
    'attributes'?: InAppPurchasePriceInlineCreateAttributes;
    'relationships'?: InAppPurchasePriceInlineCreateRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "InAppPurchasePriceScheduleCreateRequestIncludedInnerTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "InAppPurchasePriceInlineCreateAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "InAppPurchasePriceInlineCreateRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InAppPurchasePriceScheduleCreateRequestIncludedInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum InAppPurchasePriceScheduleCreateRequestIncludedInnerTypeEnum {
    InAppPurchasePrices = 'inAppPurchasePrices',
    Territories = 'territories'
}

