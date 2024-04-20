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

import { AppAvailabilityV2Attributes } from '../models/AppAvailabilityV2Attributes.ts';
import { InAppPurchaseAvailabilityRelationships } from '../models/InAppPurchaseAvailabilityRelationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class InAppPurchaseAvailability {
    'type': InAppPurchaseAvailabilityTypeEnum;
    'id': string;
    'attributes'?: AppAvailabilityV2Attributes;
    'relationships'?: InAppPurchaseAvailabilityRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "InAppPurchaseAvailabilityTypeEnum",
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
            "type": "AppAvailabilityV2Attributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "InAppPurchaseAvailabilityRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InAppPurchaseAvailability.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum InAppPurchaseAvailabilityTypeEnum {
    InAppPurchaseAvailabilities = 'inAppPurchaseAvailabilities'
}

