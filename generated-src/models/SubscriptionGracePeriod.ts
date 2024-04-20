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
import { SubscriptionGracePeriodAttributes } from '../models/SubscriptionGracePeriodAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionGracePeriod {
    'type': SubscriptionGracePeriodTypeEnum;
    'id': string;
    'attributes'?: SubscriptionGracePeriodAttributes;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionGracePeriodTypeEnum",
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
            "type": "SubscriptionGracePeriodAttributes",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionGracePeriod.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum SubscriptionGracePeriodTypeEnum {
    SubscriptionGracePeriods = 'subscriptionGracePeriods'
}
