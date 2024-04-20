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

import { HttpFile } from '../http/http.ts';

export class AppStoreReviewDetailAttributes {
    'contactFirstName'?: string;
    'contactLastName'?: string;
    'contactPhone'?: string;
    'contactEmail'?: string;
    'demoAccountName'?: string;
    'demoAccountPassword'?: string;
    'demoAccountRequired'?: boolean;
    'notes'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contactFirstName",
            "baseName": "contactFirstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactLastName",
            "baseName": "contactLastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactPhone",
            "baseName": "contactPhone",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactEmail",
            "baseName": "contactEmail",
            "type": "string",
            "format": ""
        },
        {
            "name": "demoAccountName",
            "baseName": "demoAccountName",
            "type": "string",
            "format": ""
        },
        {
            "name": "demoAccountPassword",
            "baseName": "demoAccountPassword",
            "type": "string",
            "format": ""
        },
        {
            "name": "demoAccountRequired",
            "baseName": "demoAccountRequired",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppStoreReviewDetailAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}
