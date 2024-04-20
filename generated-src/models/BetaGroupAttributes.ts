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

export class BetaGroupAttributes {
    'name'?: string;
    'createdDate'?: Date;
    'isInternalGroup'?: boolean;
    'hasAccessToAllBuilds'?: boolean;
    'publicLinkEnabled'?: boolean;
    'publicLinkId'?: string;
    'publicLinkLimitEnabled'?: boolean;
    'publicLinkLimit'?: number;
    'publicLink'?: string;
    'feedbackEnabled'?: boolean;
    'iosBuildsAvailableForAppleSiliconMac'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
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
            "name": "publicLinkId",
            "baseName": "publicLinkId",
            "type": "string",
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
            "name": "publicLink",
            "baseName": "publicLink",
            "type": "string",
            "format": ""
        },
        {
            "name": "feedbackEnabled",
            "baseName": "feedbackEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "iosBuildsAvailableForAppleSiliconMac",
            "baseName": "iosBuildsAvailableForAppleSiliconMac",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BetaGroupAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}
