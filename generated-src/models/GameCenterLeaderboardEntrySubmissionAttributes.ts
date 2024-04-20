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

import { Decimal } from '../models/Decimal.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterLeaderboardEntrySubmissionAttributes {
    'bundleId'?: string;
    'challengeIds'?: Array<string>;
    'context'?: Decimal;
    'scopedPlayerId'?: string;
    'score'?: Decimal;
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
            "name": "context",
            "baseName": "context",
            "type": "Decimal",
            "format": "number"
        },
        {
            "name": "scopedPlayerId",
            "baseName": "scopedPlayerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "score",
            "baseName": "score",
            "type": "Decimal",
            "format": "number"
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
        return GameCenterLeaderboardEntrySubmissionAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}

