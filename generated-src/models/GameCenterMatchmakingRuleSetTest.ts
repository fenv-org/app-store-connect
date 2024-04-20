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

import { GameCenterMatchmakingRuleSetTestAttributes } from '../models/GameCenterMatchmakingRuleSetTestAttributes.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterMatchmakingRuleSetTest {
    'type': GameCenterMatchmakingRuleSetTestTypeEnum;
    'id': string;
    'attributes'?: GameCenterMatchmakingRuleSetTestAttributes;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "GameCenterMatchmakingRuleSetTestTypeEnum",
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
            "type": "GameCenterMatchmakingRuleSetTestAttributes",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterMatchmakingRuleSetTest.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterMatchmakingRuleSetTestTypeEnum {
    GameCenterMatchmakingRuleSetTests = 'gameCenterMatchmakingRuleSetTests'
}
