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

import { InAppPurchaseV2 } from '../models/InAppPurchaseV2.ts';
import { PromotedPurchaseImage } from '../models/PromotedPurchaseImage.ts';
import { PromotedPurchaseImageAttributes } from '../models/PromotedPurchaseImageAttributes.ts';
import { PromotedPurchaseImageRelationships } from '../models/PromotedPurchaseImageRelationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { Subscription } from '../models/Subscription.ts';
import { HttpFile } from '../http/http.ts';

export class PromotedPurchasesResponseIncludedInner {
    'type': PromotedPurchasesResponseIncludedInnerTypeEnum;
    'id': string;
    'attributes'?: PromotedPurchaseImageAttributes;
    'relationships'?: PromotedPurchaseImageRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PromotedPurchasesResponseIncludedInnerTypeEnum",
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
            "type": "PromotedPurchaseImageAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "PromotedPurchaseImageRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PromotedPurchasesResponseIncludedInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PromotedPurchasesResponseIncludedInnerTypeEnum {
    InAppPurchases = 'inAppPurchases',
    Subscriptions = 'subscriptions',
    PromotedPurchaseImages = 'promotedPurchaseImages'
}

