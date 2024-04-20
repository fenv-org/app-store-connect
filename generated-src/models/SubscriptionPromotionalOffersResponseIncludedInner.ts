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

import { ResourceLinks } from '../models/ResourceLinks.ts';
import { Subscription } from '../models/Subscription.ts';
import { SubscriptionAttributes } from '../models/SubscriptionAttributes.ts';
import { SubscriptionOfferCodePriceRelationships } from '../models/SubscriptionOfferCodePriceRelationships.ts';
import { SubscriptionPromotionalOfferPrice } from '../models/SubscriptionPromotionalOfferPrice.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionPromotionalOffersResponseIncludedInner {
    'type': SubscriptionPromotionalOffersResponseIncludedInnerTypeEnum;
    'id': string;
    'attributes'?: SubscriptionAttributes;
    'relationships'?: SubscriptionOfferCodePriceRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionPromotionalOffersResponseIncludedInnerTypeEnum",
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
            "type": "SubscriptionAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "SubscriptionOfferCodePriceRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionPromotionalOffersResponseIncludedInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum SubscriptionPromotionalOffersResponseIncludedInnerTypeEnum {
    Subscriptions = 'subscriptions',
    SubscriptionPromotionalOfferPrices = 'subscriptionPromotionalOfferPrices'
}

