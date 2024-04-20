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
import { SubscriptionGroupLocalizationAttributes } from '../models/SubscriptionGroupLocalizationAttributes.ts';
import { SubscriptionGroupLocalizationRelationships } from '../models/SubscriptionGroupLocalizationRelationships.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionGroupLocalization {
    'type': SubscriptionGroupLocalizationTypeEnum;
    'id': string;
    'attributes'?: SubscriptionGroupLocalizationAttributes;
    'relationships'?: SubscriptionGroupLocalizationRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionGroupLocalizationTypeEnum",
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
            "type": "SubscriptionGroupLocalizationAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "SubscriptionGroupLocalizationRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionGroupLocalization.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum SubscriptionGroupLocalizationTypeEnum {
    SubscriptionGroupLocalizations = 'subscriptionGroupLocalizations'
}
