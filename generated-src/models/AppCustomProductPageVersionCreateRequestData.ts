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

import { AppCustomProductPageVersionCreateRequestDataRelationships } from '../models/AppCustomProductPageVersionCreateRequestDataRelationships.ts';
import { HttpFile } from '../http/http.ts';

export class AppCustomProductPageVersionCreateRequestData {
    'type': AppCustomProductPageVersionCreateRequestDataTypeEnum;
    'relationships': AppCustomProductPageVersionCreateRequestDataRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppCustomProductPageVersionCreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppCustomProductPageVersionCreateRequestDataRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppCustomProductPageVersionCreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppCustomProductPageVersionCreateRequestDataTypeEnum {
    AppCustomProductPageVersions = 'appCustomProductPageVersions'
}

