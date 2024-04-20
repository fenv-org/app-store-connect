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

import { PromotedPurchaseCreateRequestDataRelationshipsSubscription } from '../models/PromotedPurchaseCreateRequestDataRelationshipsSubscription.ts';
import { SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint } from '../models/SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint.ts';
import { SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory } from '../models/SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionIntroductoryOfferInlineCreateRelationships {
    'subscription'?: PromotedPurchaseCreateRequestDataRelationshipsSubscription;
    'territory'?: SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory;
    'subscriptionPricePoint'?: SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "PromotedPurchaseCreateRequestDataRelationshipsSubscription",
            "format": ""
        },
        {
            "name": "territory",
            "baseName": "territory",
            "type": "SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory",
            "format": ""
        },
        {
            "name": "subscriptionPricePoint",
            "baseName": "subscriptionPricePoint",
            "type": "SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionIntroductoryOfferInlineCreateRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}

