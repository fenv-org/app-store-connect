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

import { SubscriptionIntroductoryOfferInlineCreate } from '../models/SubscriptionIntroductoryOfferInlineCreate.ts';
import { SubscriptionIntroductoryOfferInlineCreateAttributes } from '../models/SubscriptionIntroductoryOfferInlineCreateAttributes.ts';
import { SubscriptionIntroductoryOfferInlineCreateRelationships } from '../models/SubscriptionIntroductoryOfferInlineCreateRelationships.ts';
import { SubscriptionPriceInlineCreate } from '../models/SubscriptionPriceInlineCreate.ts';
import { SubscriptionPromotionalOfferInlineCreate } from '../models/SubscriptionPromotionalOfferInlineCreate.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionUpdateRequestIncludedInner {
    'type': SubscriptionUpdateRequestIncludedInnerTypeEnum;
    'id'?: string;
    'attributes': SubscriptionIntroductoryOfferInlineCreateAttributes;
    'relationships'?: SubscriptionIntroductoryOfferInlineCreateRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionUpdateRequestIncludedInnerTypeEnum",
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
            "type": "SubscriptionIntroductoryOfferInlineCreateAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "SubscriptionIntroductoryOfferInlineCreateRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionUpdateRequestIncludedInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum SubscriptionUpdateRequestIncludedInnerTypeEnum {
    SubscriptionPromotionalOffers = 'subscriptionPromotionalOffers',
    SubscriptionPrices = 'subscriptionPrices',
    SubscriptionIntroductoryOffers = 'subscriptionIntroductoryOffers'
}
