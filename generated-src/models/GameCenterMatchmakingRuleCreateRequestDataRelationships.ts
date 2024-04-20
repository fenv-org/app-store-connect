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

import { GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet } from '../models/GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterMatchmakingRuleCreateRequestDataRelationships {
    'ruleSet': GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ruleSet",
            "baseName": "ruleSet",
            "type": "GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterMatchmakingRuleCreateRequestDataRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}
