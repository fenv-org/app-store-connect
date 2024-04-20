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

import { CapabilitySetting } from '../models/CapabilitySetting.ts';
import { CapabilityType } from '../models/CapabilityType.ts';
import { HttpFile } from '../http/http.ts';

export class BundleIdCapabilityAttributes {
    'capabilityType'?: CapabilityType;
    'settings'?: Array<CapabilitySetting>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "capabilityType",
            "baseName": "capabilityType",
            "type": "CapabilityType",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "Array<CapabilitySetting>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BundleIdCapabilityAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}



