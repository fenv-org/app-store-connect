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

import { SubscriptionPromotionalOfferCreateRequestData } from '../models/SubscriptionPromotionalOfferCreateRequestData.ts';
import { SubscriptionPromotionalOfferPriceInlineCreate } from '../models/SubscriptionPromotionalOfferPriceInlineCreate.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionPromotionalOfferCreateRequest {
    'data': SubscriptionPromotionalOfferCreateRequestData;
    'included'?: Array<SubscriptionPromotionalOfferPriceInlineCreate>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "SubscriptionPromotionalOfferCreateRequestData",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<SubscriptionPromotionalOfferPriceInlineCreate>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionPromotionalOfferCreateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

