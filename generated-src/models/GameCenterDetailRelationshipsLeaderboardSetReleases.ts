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

import { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from '../models/AlternativeDistributionPackageVersionRelationshipsVariantsLinks.ts';
import { GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner } from '../models/GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner.ts';
import { PagingInformation } from '../models/PagingInformation.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterDetailRelationshipsLeaderboardSetReleases {
    'links'?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    'meta'?: PagingInformation;
    'data'?: Array<GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "links",
            "baseName": "links",
            "type": "AlternativeDistributionPackageVersionRelationshipsVariantsLinks",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "PagingInformation",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterDetailRelationshipsLeaderboardSetReleases.attributeTypeMap;
    }

    public constructor() {
    }
}
