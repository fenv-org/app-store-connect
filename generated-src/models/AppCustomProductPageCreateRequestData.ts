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

import { AppCustomProductPageCreateRequestDataAttributes } from '../models/AppCustomProductPageCreateRequestDataAttributes.ts';
import { AppCustomProductPageCreateRequestDataRelationships } from '../models/AppCustomProductPageCreateRequestDataRelationships.ts';
import { HttpFile } from '../http/http.ts';

export class AppCustomProductPageCreateRequestData {
    'type': AppCustomProductPageCreateRequestDataTypeEnum;
    'attributes': AppCustomProductPageCreateRequestDataAttributes;
    'relationships': AppCustomProductPageCreateRequestDataRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppCustomProductPageCreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppCustomProductPageCreateRequestDataAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppCustomProductPageCreateRequestDataRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppCustomProductPageCreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppCustomProductPageCreateRequestDataTypeEnum {
    AppCustomProductPages = 'appCustomProductPages'
}

