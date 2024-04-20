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

import { AppAvailabilityV2CreateRequestDataAttributes } from '../models/AppAvailabilityV2CreateRequestDataAttributes.ts';
import { AppAvailabilityV2CreateRequestDataRelationships } from '../models/AppAvailabilityV2CreateRequestDataRelationships.ts';
import { HttpFile } from '../http/http.ts';

export class AppAvailabilityV2CreateRequestData {
    'type': AppAvailabilityV2CreateRequestDataTypeEnum;
    'attributes': AppAvailabilityV2CreateRequestDataAttributes;
    'relationships': AppAvailabilityV2CreateRequestDataRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppAvailabilityV2CreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppAvailabilityV2CreateRequestDataAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppAvailabilityV2CreateRequestDataRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppAvailabilityV2CreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppAvailabilityV2CreateRequestDataTypeEnum {
    AppAvailabilities = 'appAvailabilities'
}

