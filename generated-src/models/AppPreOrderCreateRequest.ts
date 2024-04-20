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

import { AppPreOrderCreateRequestData } from '../models/AppPreOrderCreateRequestData.ts';
import { HttpFile } from '../http/http.ts';

export class AppPreOrderCreateRequest {
    'data': AppPreOrderCreateRequestData;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppPreOrderCreateRequestData",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppPreOrderCreateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
