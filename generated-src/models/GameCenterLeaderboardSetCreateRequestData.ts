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

import { GameCenterLeaderboardSetCreateRequestDataAttributes } from '../models/GameCenterLeaderboardSetCreateRequestDataAttributes.ts';
import { GameCenterLeaderboardSetCreateRequestDataRelationships } from '../models/GameCenterLeaderboardSetCreateRequestDataRelationships.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterLeaderboardSetCreateRequestData {
    'type': GameCenterLeaderboardSetCreateRequestDataTypeEnum;
    'attributes': GameCenterLeaderboardSetCreateRequestDataAttributes;
    'relationships'?: GameCenterLeaderboardSetCreateRequestDataRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterLeaderboardSetCreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "GameCenterLeaderboardSetCreateRequestDataAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GameCenterLeaderboardSetCreateRequestDataRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterLeaderboardSetCreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterLeaderboardSetCreateRequestDataTypeEnum {
    GameCenterLeaderboardSets = 'gameCenterLeaderboardSets'
}
