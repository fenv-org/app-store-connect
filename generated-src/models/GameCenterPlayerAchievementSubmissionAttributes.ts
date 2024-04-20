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

export class GameCenterPlayerAchievementSubmissionAttributes {
    'bundleId'?: string;
    'challengeIds'?: Array<string>;
    'percentageAchieved'?: number;
    'scopedPlayerId'?: string;
    'submittedDate'?: Date;
    'vendorIdentifier'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bundleId",
            "baseName": "bundleId",
            "type": "string",
            "format": ""
        },
        {
            "name": "challengeIds",
            "baseName": "challengeIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "percentageAchieved",
            "baseName": "percentageAchieved",
            "type": "number",
            "format": ""
        },
        {
            "name": "scopedPlayerId",
            "baseName": "scopedPlayerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "submittedDate",
            "baseName": "submittedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "vendorIdentifier",
            "baseName": "vendorIdentifier",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterPlayerAchievementSubmissionAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}
