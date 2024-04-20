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

import { GameCenterPlayerAchievementSubmissionAttributes } from '../models/GameCenterPlayerAchievementSubmissionAttributes.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterPlayerAchievementSubmission {
    'type': GameCenterPlayerAchievementSubmissionTypeEnum;
    'id': string;
    'attributes'?: GameCenterPlayerAchievementSubmissionAttributes;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterPlayerAchievementSubmissionTypeEnum",
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
            "type": "GameCenterPlayerAchievementSubmissionAttributes",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterPlayerAchievementSubmission.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterPlayerAchievementSubmissionTypeEnum {
    GameCenterPlayerAchievementSubmissions = 'gameCenterPlayerAchievementSubmissions'
}
