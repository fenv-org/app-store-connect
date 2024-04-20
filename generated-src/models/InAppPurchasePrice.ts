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

import { InAppPurchasePriceAttributes } from '../models/InAppPurchasePriceAttributes.ts';
import { InAppPurchasePriceRelationships } from '../models/InAppPurchasePriceRelationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class InAppPurchasePrice {
    'type': InAppPurchasePriceTypeEnum;
    'id': string;
    'attributes'?: InAppPurchasePriceAttributes;
    'relationships'?: InAppPurchasePriceRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "InAppPurchasePriceTypeEnum",
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
            "type": "InAppPurchasePriceAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "InAppPurchasePriceRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InAppPurchasePrice.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum InAppPurchasePriceTypeEnum {
    InAppPurchasePrices = 'inAppPurchasePrices'
}
