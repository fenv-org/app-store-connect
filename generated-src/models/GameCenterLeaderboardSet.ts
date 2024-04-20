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

import { GameCenterLeaderboardSetAttributes } from '../models/GameCenterLeaderboardSetAttributes.ts';
import { GameCenterLeaderboardSetRelationships } from '../models/GameCenterLeaderboardSetRelationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterLeaderboardSet {
    'type': GameCenterLeaderboardSetTypeEnum;
    'id': string;
    'attributes'?: GameCenterLeaderboardSetAttributes;
    'relationships'?: GameCenterLeaderboardSetRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterLeaderboardSetTypeEnum",
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
            "type": "GameCenterLeaderboardSetAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GameCenterLeaderboardSetRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterLeaderboardSet.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterLeaderboardSetTypeEnum {
    GameCenterLeaderboardSets = 'gameCenterLeaderboardSets'
}
