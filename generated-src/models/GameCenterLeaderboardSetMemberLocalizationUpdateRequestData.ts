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

import { BundleIdUpdateRequestDataAttributes } from '../models/BundleIdUpdateRequestDataAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterLeaderboardSetMemberLocalizationUpdateRequestData {
    'type': GameCenterLeaderboardSetMemberLocalizationUpdateRequestDataTypeEnum;
    'id': string;
    'attributes'?: BundleIdUpdateRequestDataAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterLeaderboardSetMemberLocalizationUpdateRequestDataTypeEnum",
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
            "type": "BundleIdUpdateRequestDataAttributes",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterLeaderboardSetMemberLocalizationUpdateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterLeaderboardSetMemberLocalizationUpdateRequestDataTypeEnum {
    GameCenterLeaderboardSetMemberLocalizations = 'gameCenterLeaderboardSetMemberLocalizations'
}
