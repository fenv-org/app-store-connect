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
import { GameCenterGroup } from '../models/GameCenterGroup.ts';
import { GameCenterGroupsResponseIncludedInner } from '../models/GameCenterGroupsResponseIncludedInner.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterGroupResponse {
    'data': GameCenterGroup;
    'included'?: Array<GameCenterGroupsResponseIncludedInner>;
    'links': DocumentLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "GameCenterGroup",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<GameCenterGroupsResponseIncludedInner>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterGroupResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
