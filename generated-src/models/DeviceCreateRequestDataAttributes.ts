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

import { BundleIdPlatform } from '../models/BundleIdPlatform.ts';
import { HttpFile } from '../http/http.ts';

export class DeviceCreateRequestDataAttributes {
    'name': string;
    'platform': BundleIdPlatform;
    'udid': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "platform",
            "baseName": "platform",
            "type": "BundleIdPlatform",
            "format": ""
        },
        {
            "name": "udid",
            "baseName": "udid",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DeviceCreateRequestDataAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}



