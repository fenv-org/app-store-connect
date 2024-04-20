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

export class AlternativeDistributionPackageDeltaAttributes {
    'url'?: string;
    'urlExpirationDate'?: Date;
    'alternativeDistributionKeyBlob'?: string;
    'fileChecksum'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "urlExpirationDate",
            "baseName": "urlExpirationDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "alternativeDistributionKeyBlob",
            "baseName": "alternativeDistributionKeyBlob",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileChecksum",
            "baseName": "fileChecksum",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AlternativeDistributionPackageDeltaAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}
