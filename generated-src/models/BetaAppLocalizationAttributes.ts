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

export class BetaAppLocalizationAttributes {
    'feedbackEmail'?: string;
    'marketingUrl'?: string;
    'privacyPolicyUrl'?: string;
    'tvOsPrivacyPolicy'?: string;
    'description'?: string;
    'locale'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "feedbackEmail",
            "baseName": "feedbackEmail",
            "type": "string",
            "format": ""
        },
        {
            "name": "marketingUrl",
            "baseName": "marketingUrl",
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
            "name": "tvOsPrivacyPolicy",
            "baseName": "tvOsPrivacyPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BetaAppLocalizationAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}

