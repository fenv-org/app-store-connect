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

import { SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup } from '../models/SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionGroupLocalizationCreateRequestDataRelationships {
    'subscriptionGroup': SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "subscriptionGroup",
            "baseName": "subscriptionGroup",
            "type": "SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionGroupLocalizationCreateRequestDataRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}
