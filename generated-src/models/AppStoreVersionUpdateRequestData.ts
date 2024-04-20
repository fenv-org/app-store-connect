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

import { AppStoreVersionUpdateRequestDataAttributes } from '../models/AppStoreVersionUpdateRequestDataAttributes.ts';
import { AppStoreVersionUpdateRequestDataRelationships } from '../models/AppStoreVersionUpdateRequestDataRelationships.ts';
import { HttpFile } from '../http/http.ts';

export class AppStoreVersionUpdateRequestData {
    'type': AppStoreVersionUpdateRequestDataTypeEnum;
    'id': string;
    'attributes'?: AppStoreVersionUpdateRequestDataAttributes;
    'relationships'?: AppStoreVersionUpdateRequestDataRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppStoreVersionUpdateRequestDataTypeEnum",
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
            "type": "AppStoreVersionUpdateRequestDataAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppStoreVersionUpdateRequestDataRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppStoreVersionUpdateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppStoreVersionUpdateRequestDataTypeEnum {
    AppStoreVersions = 'appStoreVersions'
}
