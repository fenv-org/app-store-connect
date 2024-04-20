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
import { SubscriptionPromotionalOfferAttributes } from '../models/SubscriptionPromotionalOfferAttributes.ts';
import { SubscriptionPromotionalOfferRelationships } from '../models/SubscriptionPromotionalOfferRelationships.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionPromotionalOffer {
    'type': SubscriptionPromotionalOfferTypeEnum;
    'id': string;
    'attributes'?: SubscriptionPromotionalOfferAttributes;
    'relationships'?: SubscriptionPromotionalOfferRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionPromotionalOfferTypeEnum",
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
            "type": "SubscriptionPromotionalOfferAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "SubscriptionPromotionalOfferRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionPromotionalOffer.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum SubscriptionPromotionalOfferTypeEnum {
    SubscriptionPromotionalOffers = 'subscriptionPromotionalOffers'
}

