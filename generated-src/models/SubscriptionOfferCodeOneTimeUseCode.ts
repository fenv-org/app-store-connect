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
import { SubscriptionOfferCodeCustomCodeRelationships } from '../models/SubscriptionOfferCodeCustomCodeRelationships.ts';
import { SubscriptionOfferCodeOneTimeUseCodeAttributes } from '../models/SubscriptionOfferCodeOneTimeUseCodeAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionOfferCodeOneTimeUseCode {
    'type': SubscriptionOfferCodeOneTimeUseCodeTypeEnum;
    'id': string;
    'attributes'?: SubscriptionOfferCodeOneTimeUseCodeAttributes;
    'relationships'?: SubscriptionOfferCodeCustomCodeRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionOfferCodeOneTimeUseCodeTypeEnum",
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
            "type": "SubscriptionOfferCodeOneTimeUseCodeAttributes",
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
        return SubscriptionOfferCodeOneTimeUseCode.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum SubscriptionOfferCodeOneTimeUseCodeTypeEnum {
    SubscriptionOfferCodeOneTimeUseCodes = 'subscriptionOfferCodeOneTimeUseCodes'
}

