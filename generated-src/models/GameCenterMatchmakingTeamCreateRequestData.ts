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

import { GameCenterMatchmakingRuleCreateRequestDataRelationships } from '../models/GameCenterMatchmakingRuleCreateRequestDataRelationships.ts';
import { GameCenterMatchmakingTeamCreateRequestDataAttributes } from '../models/GameCenterMatchmakingTeamCreateRequestDataAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterMatchmakingTeamCreateRequestData {
    'type': GameCenterMatchmakingTeamCreateRequestDataTypeEnum;
    'attributes': GameCenterMatchmakingTeamCreateRequestDataAttributes;
    'relationships': GameCenterMatchmakingRuleCreateRequestDataRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterMatchmakingTeamCreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "GameCenterMatchmakingTeamCreateRequestDataAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GameCenterMatchmakingRuleCreateRequestDataRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterMatchmakingTeamCreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterMatchmakingTeamCreateRequestDataTypeEnum {
    GameCenterMatchmakingTeams = 'gameCenterMatchmakingTeams'
}
