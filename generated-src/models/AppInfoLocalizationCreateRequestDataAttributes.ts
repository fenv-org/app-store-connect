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

import { HttpFile } from '../http/http.ts';

export class AppInfoLocalizationCreateRequestDataAttributes {
    'locale': string;
    'name'?: string;
    'subtitle'?: string;
    'privacyPolicyUrl'?: string;
    'privacyChoicesUrl'?: string;
    'privacyPolicyText'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "subtitle",
            "baseName": "subtitle",
            "type": "string",
            "format": ""
        },
        {
            "name": "privacyPolicyUrl",
            "baseName": "privacyPolicyUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "privacyChoicesUrl",
            "baseName": "privacyChoicesUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "privacyPolicyText",
            "baseName": "privacyPolicyText",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppInfoLocalizationCreateRequestDataAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}

