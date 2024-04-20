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
import { SubscriptionPromotionalOfferInlineCreateRelationshipsPrices } from '../models/SubscriptionPromotionalOfferInlineCreateRelationshipsPrices.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionPromotionalOfferInlineCreateRelationships {
    'subscription'?: PromotedPurchaseCreateRequestDataRelationshipsSubscription;
    'prices'?: SubscriptionPromotionalOfferInlineCreateRelationshipsPrices;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "PromotedPurchaseCreateRequestDataRelationshipsSubscription",
            "format": ""
        },
        {
            "name": "prices",
            "baseName": "prices",
            "type": "SubscriptionPromotionalOfferInlineCreateRelationshipsPrices",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionPromotionalOfferInlineCreateRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}

