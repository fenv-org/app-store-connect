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

import { GameCenterMatchmakingTestRequestInlineCreateAttributes } from '../models/GameCenterMatchmakingTestRequestInlineCreateAttributes.ts';
import { GameCenterMatchmakingTestRequestInlineCreateRelationships } from '../models/GameCenterMatchmakingTestRequestInlineCreateRelationships.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterMatchmakingTestRequestInlineCreate {
    'type': GameCenterMatchmakingTestRequestInlineCreateTypeEnum;
    'id'?: string;
    'attributes': GameCenterMatchmakingTestRequestInlineCreateAttributes;
    'relationships'?: GameCenterMatchmakingTestRequestInlineCreateRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterMatchmakingTestRequestInlineCreateTypeEnum",
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
            "type": "GameCenterMatchmakingTestRequestInlineCreateAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GameCenterMatchmakingTestRequestInlineCreateRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterMatchmakingTestRequestInlineCreate.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterMatchmakingTestRequestInlineCreateTypeEnum {
    GameCenterMatchmakingTestRequests = 'gameCenterMatchmakingTestRequests'
}
