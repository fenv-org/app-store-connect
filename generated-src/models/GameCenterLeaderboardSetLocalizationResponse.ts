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

import { DocumentLinks } from '../models/DocumentLinks.ts';
import { GameCenterLeaderboardSetLocalization } from '../models/GameCenterLeaderboardSetLocalization.ts';
import { GameCenterLeaderboardSetLocalizationsResponseIncludedInner } from '../models/GameCenterLeaderboardSetLocalizationsResponseIncludedInner.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterLeaderboardSetLocalizationResponse {
    'data': GameCenterLeaderboardSetLocalization;
    'included'?: Array<GameCenterLeaderboardSetLocalizationsResponseIncludedInner>;
    'links': DocumentLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "GameCenterLeaderboardSetLocalization",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<GameCenterLeaderboardSetLocalizationsResponseIncludedInner>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterLeaderboardSetLocalizationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
