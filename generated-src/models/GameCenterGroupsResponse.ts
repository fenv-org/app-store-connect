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

import { GameCenterGroup } from '../models/GameCenterGroup.ts';
import { GameCenterGroupsResponseIncludedInner } from '../models/GameCenterGroupsResponseIncludedInner.ts';
import { PagedDocumentLinks } from '../models/PagedDocumentLinks.ts';
import { PagingInformation } from '../models/PagingInformation.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterGroupsResponse {
    'data': Array<GameCenterGroup>;
    'included'?: Array<GameCenterGroupsResponseIncludedInner>;
    'links': PagedDocumentLinks;
    'meta'?: PagingInformation;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GameCenterGroup>",
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
            "type": "PagedDocumentLinks",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "PagingInformation",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterGroupsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

