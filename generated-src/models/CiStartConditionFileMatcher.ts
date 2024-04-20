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

export class CiStartConditionFileMatcher {
    'directory'?: string;
    'fileExtension'?: string;
    'fileName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "directory",
            "baseName": "directory",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileExtension",
            "baseName": "fileExtension",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CiStartConditionFileMatcher.attributeTypeMap;
    }

    public constructor() {
    }
}
