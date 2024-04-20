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

import { GameCenterLeaderboardSetLocalizationAttributes } from '../models/GameCenterLeaderboardSetLocalizationAttributes.ts';
import { GameCenterLeaderboardSetLocalizationRelationships } from '../models/GameCenterLeaderboardSetLocalizationRelationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterLeaderboardSetLocalization {
    'type': GameCenterLeaderboardSetLocalizationTypeEnum;
    'id': string;
    'attributes'?: GameCenterLeaderboardSetLocalizationAttributes;
    'relationships'?: GameCenterLeaderboardSetLocalizationRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterLeaderboardSetLocalizationTypeEnum",
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
            "type": "GameCenterLeaderboardSetLocalizationAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GameCenterLeaderboardSetLocalizationRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterLeaderboardSetLocalization.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterLeaderboardSetLocalizationTypeEnum {
    GameCenterLeaderboardSetLocalizations = 'gameCenterLeaderboardSetLocalizations'
}

