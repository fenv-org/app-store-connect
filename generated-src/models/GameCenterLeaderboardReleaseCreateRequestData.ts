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

import { GameCenterLeaderboardReleaseCreateRequestDataRelationships } from '../models/GameCenterLeaderboardReleaseCreateRequestDataRelationships.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterLeaderboardReleaseCreateRequestData {
    'type': GameCenterLeaderboardReleaseCreateRequestDataTypeEnum;
    'relationships': GameCenterLeaderboardReleaseCreateRequestDataRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterLeaderboardReleaseCreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GameCenterLeaderboardReleaseCreateRequestDataRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterLeaderboardReleaseCreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterLeaderboardReleaseCreateRequestDataTypeEnum {
    GameCenterLeaderboardReleases = 'gameCenterLeaderboardReleases'
}
