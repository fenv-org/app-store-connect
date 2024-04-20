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

import { GameCenterMatchmakingQueue } from '../models/GameCenterMatchmakingQueue.ts';
import { GameCenterMatchmakingQueueAttributes } from '../models/GameCenterMatchmakingQueueAttributes.ts';
import { GameCenterMatchmakingQueueRelationships } from '../models/GameCenterMatchmakingQueueRelationships.ts';
import { GameCenterMatchmakingRule } from '../models/GameCenterMatchmakingRule.ts';
import { GameCenterMatchmakingTeam } from '../models/GameCenterMatchmakingTeam.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterMatchmakingRuleSetsResponseIncludedInner {
    'type': GameCenterMatchmakingRuleSetsResponseIncludedInnerTypeEnum;
    'id': string;
    'attributes'?: GameCenterMatchmakingQueueAttributes;
    'links'?: ResourceLinks;
    'relationships'?: GameCenterMatchmakingQueueRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterMatchmakingRuleSetsResponseIncludedInnerTypeEnum",
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
            "type": "GameCenterMatchmakingQueueAttributes",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GameCenterMatchmakingQueueRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterMatchmakingRuleSetsResponseIncludedInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterMatchmakingRuleSetsResponseIncludedInnerTypeEnum {
    GameCenterMatchmakingTeams = 'gameCenterMatchmakingTeams',
    GameCenterMatchmakingRules = 'gameCenterMatchmakingRules',
    GameCenterMatchmakingQueues = 'gameCenterMatchmakingQueues'
}
