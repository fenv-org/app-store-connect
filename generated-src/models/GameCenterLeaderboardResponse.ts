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
import { GameCenterLeaderboard } from '../models/GameCenterLeaderboard.ts';
import { GameCenterLeaderboardsResponseIncludedInner } from '../models/GameCenterLeaderboardsResponseIncludedInner.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterLeaderboardResponse {
    'data': GameCenterLeaderboard;
    'included'?: Array<GameCenterLeaderboardsResponseIncludedInner>;
    'links': DocumentLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "GameCenterLeaderboard",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<GameCenterLeaderboardsResponseIncludedInner>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterLeaderboardResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

