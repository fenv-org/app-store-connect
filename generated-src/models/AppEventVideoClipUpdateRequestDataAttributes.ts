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

export class AppEventVideoClipUpdateRequestDataAttributes {
    'previewFrameTimeCode'?: string;
    'uploaded'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "previewFrameTimeCode",
            "baseName": "previewFrameTimeCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "uploaded",
            "baseName": "uploaded",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppEventVideoClipUpdateRequestDataAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}

