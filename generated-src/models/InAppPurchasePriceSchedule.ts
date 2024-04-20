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

import { InAppPurchasePriceScheduleRelationships } from '../models/InAppPurchasePriceScheduleRelationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class InAppPurchasePriceSchedule {
    'type': InAppPurchasePriceScheduleTypeEnum;
    'id': string;
    'relationships'?: InAppPurchasePriceScheduleRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "InAppPurchasePriceScheduleTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "InAppPurchasePriceScheduleRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InAppPurchasePriceSchedule.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum InAppPurchasePriceScheduleTypeEnum {
    InAppPurchasePriceSchedules = 'inAppPurchasePriceSchedules'
}
