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

import { DocumentLinks } from '../models/DocumentLinks.ts';
import { SandboxTestersClearPurchaseHistoryRequestV2 } from '../models/SandboxTestersClearPurchaseHistoryRequestV2.ts';
import { HttpFile } from '../http/http.ts';

export class SandboxTestersClearPurchaseHistoryRequestV2Response {
    'data': SandboxTestersClearPurchaseHistoryRequestV2;
    'links': DocumentLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "SandboxTestersClearPurchaseHistoryRequestV2",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SandboxTestersClearPurchaseHistoryRequestV2Response.attributeTypeMap;
    }

    public constructor() {
    }
}

