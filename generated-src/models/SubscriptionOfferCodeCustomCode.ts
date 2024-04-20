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
import { SubscriptionOfferCodeCustomCodeAttributes } from '../models/SubscriptionOfferCodeCustomCodeAttributes.ts';
import { SubscriptionOfferCodeCustomCodeRelationships } from '../models/SubscriptionOfferCodeCustomCodeRelationships.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionOfferCodeCustomCode {
    'type': SubscriptionOfferCodeCustomCodeTypeEnum;
    'id': string;
    'attributes'?: SubscriptionOfferCodeCustomCodeAttributes;
    'relationships'?: SubscriptionOfferCodeCustomCodeRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionOfferCodeCustomCodeTypeEnum",
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
            "type": "SubscriptionOfferCodeCustomCodeAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "SubscriptionOfferCodeCustomCodeRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionOfferCodeCustomCode.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum SubscriptionOfferCodeCustomCodeTypeEnum {
    SubscriptionOfferCodeCustomCodes = 'subscriptionOfferCodeCustomCodes'
}
