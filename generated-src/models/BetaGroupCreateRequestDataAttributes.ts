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

export class BetaGroupCreateRequestDataAttributes {
    'name': string;
    'isInternalGroup'?: boolean;
    'hasAccessToAllBuilds'?: boolean;
    'publicLinkEnabled'?: boolean;
    'publicLinkLimitEnabled'?: boolean;
    'publicLinkLimit'?: number;
    'feedbackEnabled'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "isInternalGroup",
            "baseName": "isInternalGroup",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasAccessToAllBuilds",
            "baseName": "hasAccessToAllBuilds",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "publicLinkEnabled",
            "baseName": "publicLinkEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "publicLinkLimitEnabled",
            "baseName": "publicLinkLimitEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "publicLinkLimit",
            "baseName": "publicLinkLimit",
            "type": "number",
            "format": ""
        },
        {
            "name": "feedbackEnabled",
            "baseName": "feedbackEnabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BetaGroupCreateRequestDataAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}

