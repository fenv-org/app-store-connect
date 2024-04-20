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

import { GameCenterLeaderboardLocalizationUpdateRequestDataAttributes } from '../models/GameCenterLeaderboardLocalizationUpdateRequestDataAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterLeaderboardLocalizationUpdateRequestData {
    'type': GameCenterLeaderboardLocalizationUpdateRequestDataTypeEnum;
    'id': string;
    'attributes'?: GameCenterLeaderboardLocalizationUpdateRequestDataAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterLeaderboardLocalizationUpdateRequestDataTypeEnum",
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
            "type": "GameCenterLeaderboardLocalizationUpdateRequestDataAttributes",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterLeaderboardLocalizationUpdateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterLeaderboardLocalizationUpdateRequestDataTypeEnum {
    GameCenterLeaderboardLocalizations = 'gameCenterLeaderboardLocalizations'
}
