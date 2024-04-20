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

import { AppCustomProductPageUpdateRequestDataAttributes } from '../models/AppCustomProductPageUpdateRequestDataAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class AppCustomProductPageUpdateRequestData {
    'type': AppCustomProductPageUpdateRequestDataTypeEnum;
    'id': string;
    'attributes'?: AppCustomProductPageUpdateRequestDataAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppCustomProductPageUpdateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppCustomProductPageUpdateRequestDataAttributes",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppCustomProductPageUpdateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppCustomProductPageUpdateRequestDataTypeEnum {
    AppCustomProductPages = 'appCustomProductPages'
}

