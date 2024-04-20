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

import { AppEventAssetType } from '../models/AppEventAssetType.ts';
import { HttpFile } from '../http/http.ts';

export class AppEventVideoClipCreateRequestDataAttributes {
    'fileSize': number;
    'fileName': string;
    'previewFrameTimeCode'?: string;
    'appEventAssetType': AppEventAssetType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fileSize",
            "baseName": "fileSize",
            "type": "number",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string",
            "format": ""
        },
        {
            "name": "previewFrameTimeCode",
            "baseName": "previewFrameTimeCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "appEventAssetType",
            "baseName": "appEventAssetType",
            "type": "AppEventAssetType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppEventVideoClipCreateRequestDataAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}


