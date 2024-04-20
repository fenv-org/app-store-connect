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

export class GameCenterAchievementUpdateRequestDataAttributes {
    'referenceName'?: string;
    'points'?: number;
    'showBeforeEarned'?: boolean;
    'repeatable'?: boolean;
    'archived'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "referenceName",
            "baseName": "referenceName",
            "type": "string",
            "format": ""
        },
        {
            "name": "points",
            "baseName": "points",
            "type": "number",
            "format": ""
        },
        {
            "name": "showBeforeEarned",
            "baseName": "showBeforeEarned",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "repeatable",
            "baseName": "repeatable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterAchievementUpdateRequestDataAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}

