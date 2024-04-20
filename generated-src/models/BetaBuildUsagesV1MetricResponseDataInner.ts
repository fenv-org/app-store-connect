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

import { BetaBuildUsagesV1MetricResponseDataInnerDataPoints } from '../models/BetaBuildUsagesV1MetricResponseDataInnerDataPoints.ts';
import { BetaBuildUsagesV1MetricResponseDataInnerDimensions } from '../models/BetaBuildUsagesV1MetricResponseDataInnerDimensions.ts';
import { HttpFile } from '../http/http.ts';

export class BetaBuildUsagesV1MetricResponseDataInner {
    'dataPoints'?: BetaBuildUsagesV1MetricResponseDataInnerDataPoints;
    'dimensions'?: BetaBuildUsagesV1MetricResponseDataInnerDimensions;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dataPoints",
            "baseName": "dataPoints",
            "type": "BetaBuildUsagesV1MetricResponseDataInnerDataPoints",
            "format": ""
        },
        {
            "name": "dimensions",
            "baseName": "dimensions",
            "type": "BetaBuildUsagesV1MetricResponseDataInnerDimensions",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BetaBuildUsagesV1MetricResponseDataInner.attributeTypeMap;
    }

    public constructor() {
    }
}
