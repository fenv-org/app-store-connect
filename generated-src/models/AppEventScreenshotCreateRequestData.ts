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

import { AppEventScreenshotCreateRequestDataAttributes } from '../models/AppEventScreenshotCreateRequestDataAttributes.ts';
import { AppEventScreenshotCreateRequestDataRelationships } from '../models/AppEventScreenshotCreateRequestDataRelationships.ts';
import { HttpFile } from '../http/http.ts';

export class AppEventScreenshotCreateRequestData {
    'type': AppEventScreenshotCreateRequestDataTypeEnum;
    'attributes': AppEventScreenshotCreateRequestDataAttributes;
    'relationships': AppEventScreenshotCreateRequestDataRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppEventScreenshotCreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppEventScreenshotCreateRequestDataAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppEventScreenshotCreateRequestDataRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppEventScreenshotCreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppEventScreenshotCreateRequestDataTypeEnum {
    AppEventScreenshots = 'appEventScreenshots'
}

