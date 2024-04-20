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

import { AppAvailabilityRelationships } from '../models/AppAvailabilityRelationships.ts';
import { AppAvailabilityV2Attributes } from '../models/AppAvailabilityV2Attributes.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class AppAvailability {
    'type': AppAvailabilityTypeEnum;
    'id': string;
    'attributes'?: AppAvailabilityV2Attributes;
    'relationships'?: AppAvailabilityRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppAvailabilityTypeEnum",
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
            "type": "AppAvailabilityRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppAvailability.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppAvailabilityTypeEnum {
    AppAvailabilities = 'appAvailabilities'
}

