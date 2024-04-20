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

import { AppCustomProductPageLocalizationCreateRequestDataRelationships } from '../models/AppCustomProductPageLocalizationCreateRequestDataRelationships.ts';
import { AppCustomProductPageLocalizationInlineCreateAttributes } from '../models/AppCustomProductPageLocalizationInlineCreateAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class AppCustomProductPageLocalizationCreateRequestData {
    'type': AppCustomProductPageLocalizationCreateRequestDataTypeEnum;
    'attributes': AppCustomProductPageLocalizationInlineCreateAttributes;
    'relationships': AppCustomProductPageLocalizationCreateRequestDataRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppCustomProductPageLocalizationCreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppCustomProductPageLocalizationInlineCreateAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppCustomProductPageLocalizationCreateRequestDataRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppCustomProductPageLocalizationCreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppCustomProductPageLocalizationCreateRequestDataTypeEnum {
    AppCustomProductPageLocalizations = 'appCustomProductPageLocalizations'
}
