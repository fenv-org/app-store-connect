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

import { GameCenterPlayerAchievementSubmissionCreateRequestDataAttributes } from '../models/GameCenterPlayerAchievementSubmissionCreateRequestDataAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterPlayerAchievementSubmissionCreateRequestData {
    'type': GameCenterPlayerAchievementSubmissionCreateRequestDataTypeEnum;
    'attributes': GameCenterPlayerAchievementSubmissionCreateRequestDataAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterPlayerAchievementSubmissionCreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "GameCenterPlayerAchievementSubmissionCreateRequestDataAttributes",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterPlayerAchievementSubmissionCreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterPlayerAchievementSubmissionCreateRequestDataTypeEnum {
    GameCenterPlayerAchievementSubmissions = 'gameCenterPlayerAchievementSubmissions'
}

