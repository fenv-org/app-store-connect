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

import { GameCenterAchievement } from '../models/GameCenterAchievement.ts';
import { GameCenterAchievementImage } from '../models/GameCenterAchievementImage.ts';
import { GameCenterAchievementImageAttributes } from '../models/GameCenterAchievementImageAttributes.ts';
import { GameCenterAchievementImageRelationships } from '../models/GameCenterAchievementImageRelationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterAchievementLocalizationsResponseIncludedInner {
    'type': GameCenterAchievementLocalizationsResponseIncludedInnerTypeEnum;
    'id': string;
    'attributes'?: GameCenterAchievementImageAttributes;
    'relationships'?: GameCenterAchievementImageRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterAchievementLocalizationsResponseIncludedInnerTypeEnum",
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
            "type": "GameCenterAchievementImageRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterAchievementLocalizationsResponseIncludedInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterAchievementLocalizationsResponseIncludedInnerTypeEnum {
    GameCenterAchievements = 'gameCenterAchievements',
    GameCenterAchievementImages = 'gameCenterAchievementImages'
}
