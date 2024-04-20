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

import { AppPreviewCreateRequestDataRelationshipsAppPreviewSet } from '../models/AppPreviewCreateRequestDataRelationshipsAppPreviewSet.ts';
import { HttpFile } from '../http/http.ts';

export class AppPreviewCreateRequestDataRelationships {
    'appPreviewSet': AppPreviewCreateRequestDataRelationshipsAppPreviewSet;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appPreviewSet",
            "baseName": "appPreviewSet",
            "type": "AppPreviewCreateRequestDataRelationshipsAppPreviewSet",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppPreviewCreateRequestDataRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}

