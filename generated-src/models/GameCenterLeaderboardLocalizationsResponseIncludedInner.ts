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

import { GameCenterAchievementImageAttributes } from '../models/GameCenterAchievementImageAttributes.ts';
import { GameCenterLeaderboard } from '../models/GameCenterLeaderboard.ts';
import { GameCenterLeaderboardImage } from '../models/GameCenterLeaderboardImage.ts';
import { GameCenterLeaderboardImageRelationships } from '../models/GameCenterLeaderboardImageRelationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterLeaderboardLocalizationsResponseIncludedInner {
    'type': GameCenterLeaderboardLocalizationsResponseIncludedInnerTypeEnum;
    'id': string;
    'attributes'?: GameCenterAchievementImageAttributes;
    'relationships'?: GameCenterLeaderboardImageRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterLeaderboardLocalizationsResponseIncludedInnerTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "GameCenterAchievementImageAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GameCenterLeaderboardImageRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterLeaderboardLocalizationsResponseIncludedInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterLeaderboardLocalizationsResponseIncludedInnerTypeEnum {
    GameCenterLeaderboards = 'gameCenterLeaderboards',
    GameCenterLeaderboardImages = 'gameCenterLeaderboardImages'
}

