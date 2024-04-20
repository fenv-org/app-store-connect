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
import { SubscriptionOfferCodeAttributes } from '../models/SubscriptionOfferCodeAttributes.ts';
import { SubscriptionOfferCodeRelationships } from '../models/SubscriptionOfferCodeRelationships.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionOfferCode {
    'type': SubscriptionOfferCodeTypeEnum;
    'id': string;
    'attributes'?: SubscriptionOfferCodeAttributes;
    'relationships'?: SubscriptionOfferCodeRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionOfferCodeTypeEnum",
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
            "type": "SubscriptionOfferCodeAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "SubscriptionOfferCodeRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionOfferCode.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum SubscriptionOfferCodeTypeEnum {
    SubscriptionOfferCodes = 'subscriptionOfferCodes'
}
