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

import { AppClipAdvancedExperienceImageCreateRequestDataAttributes } from '../models/AppClipAdvancedExperienceImageCreateRequestDataAttributes.ts';
import { AppClipHeaderImageCreateRequestDataRelationships } from '../models/AppClipHeaderImageCreateRequestDataRelationships.ts';
import { HttpFile } from '../http/http.ts';

export class AppClipHeaderImageCreateRequestData {
    'type': AppClipHeaderImageCreateRequestDataTypeEnum;
    'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributes;
    'relationships': AppClipHeaderImageCreateRequestDataRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppClipHeaderImageCreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppClipAdvancedExperienceImageCreateRequestDataAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppClipHeaderImageCreateRequestDataRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppClipHeaderImageCreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppClipHeaderImageCreateRequestDataTypeEnum {
    AppClipHeaderImages = 'appClipHeaderImages'
}

