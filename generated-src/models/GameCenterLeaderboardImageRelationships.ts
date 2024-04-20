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

import { GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization } from '../models/GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterLeaderboardImageRelationships {
    'gameCenterLeaderboardLocalization'?: GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "gameCenterLeaderboardLocalization",
            "baseName": "gameCenterLeaderboardLocalization",
            "type": "GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterLeaderboardImageRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}
