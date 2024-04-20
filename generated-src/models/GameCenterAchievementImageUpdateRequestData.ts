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

import { AppEventScreenshotUpdateRequestDataAttributes } from '../models/AppEventScreenshotUpdateRequestDataAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterAchievementImageUpdateRequestData {
    'type': GameCenterAchievementImageUpdateRequestDataTypeEnum;
    'id': string;
    'attributes'?: AppEventScreenshotUpdateRequestDataAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterAchievementImageUpdateRequestDataTypeEnum",
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
            "type": "AppEventScreenshotUpdateRequestDataAttributes",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterAchievementImageUpdateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterAchievementImageUpdateRequestDataTypeEnum {
    GameCenterAchievementImages = 'gameCenterAchievementImages'
}

