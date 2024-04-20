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

import { GameCenterLeaderboardSetMemberLocalizationAttributes } from '../models/GameCenterLeaderboardSetMemberLocalizationAttributes.ts';
import { GameCenterLeaderboardSetMemberLocalizationRelationships } from '../models/GameCenterLeaderboardSetMemberLocalizationRelationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterLeaderboardSetMemberLocalization {
    'type': GameCenterLeaderboardSetMemberLocalizationTypeEnum;
    'id': string;
    'attributes'?: GameCenterLeaderboardSetMemberLocalizationAttributes;
    'relationships'?: GameCenterLeaderboardSetMemberLocalizationRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterLeaderboardSetMemberLocalizationTypeEnum",
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
            "type": "GameCenterLeaderboardSetMemberLocalizationAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GameCenterLeaderboardSetMemberLocalizationRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterLeaderboardSetMemberLocalization.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterLeaderboardSetMemberLocalizationTypeEnum {
    GameCenterLeaderboardSetMemberLocalizations = 'gameCenterLeaderboardSetMemberLocalizations'
}

