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

import { GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints } from '../models/GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints.ts';
import { GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions } from '../models/GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions.ts';
import { HttpFile } from '../http/http.ts';

export class GameCenterMatchmakingAppRequestsV1MetricResponseDataInner {
    'dataPoints'?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints;
    'dimensions'?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions;
    'granularity'?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerGranularityEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dataPoints",
            "baseName": "dataPoints",
            "type": "GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints",
            "format": ""
        },
        {
            "name": "dimensions",
            "baseName": "dimensions",
            "type": "GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions",
            "format": ""
        },
        {
            "name": "granularity",
            "baseName": "granularity",
            "type": "GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerGranularityEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameCenterMatchmakingAppRequestsV1MetricResponseDataInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerGranularityEnum {
    P1D = 'P1D',
    Pt1H = 'PT1H',
    Pt15M = 'PT15M'
}

