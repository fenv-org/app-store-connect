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

import { CiTestDestinationKind } from '../models/CiTestDestinationKind.ts';
import { HttpFile } from '../http/http.ts';

export class CiTestDestination {
    'deviceTypeName'?: string;
    'deviceTypeIdentifier'?: string;
    'runtimeName'?: string;
    'runtimeIdentifier'?: string;
    'kind'?: CiTestDestinationKind;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deviceTypeName",
            "baseName": "deviceTypeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "deviceTypeIdentifier",
            "baseName": "deviceTypeIdentifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "runtimeName",
            "baseName": "runtimeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "runtimeIdentifier",
            "baseName": "runtimeIdentifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "CiTestDestinationKind",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CiTestDestination.attributeTypeMap;
    }

    public constructor() {
    }
}


