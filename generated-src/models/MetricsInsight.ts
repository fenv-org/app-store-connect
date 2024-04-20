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

import { MetricCategory } from '../models/MetricCategory.ts';
import { MetricsInsightPopulationsInner } from '../models/MetricsInsightPopulationsInner.ts';
import { HttpFile } from '../http/http.ts';

export class MetricsInsight {
    'metricCategory'?: MetricCategory;
    'latestVersion'?: string;
    'metric'?: string;
    'summaryString'?: string;
    'referenceVersions'?: string;
    'maxLatestVersionValue'?: number;
    'subSystemLabel'?: string;
    'highImpact'?: boolean;
    'populations'?: Array<MetricsInsightPopulationsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metricCategory",
            "baseName": "metricCategory",
            "type": "MetricCategory",
            "format": ""
        },
        {
            "name": "latestVersion",
            "baseName": "latestVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "string",
            "format": ""
        },
        {
            "name": "summaryString",
            "baseName": "summaryString",
            "type": "string",
            "format": ""
        },
        {
            "name": "referenceVersions",
            "baseName": "referenceVersions",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxLatestVersionValue",
            "baseName": "maxLatestVersionValue",
            "type": "number",
            "format": ""
        },
        {
            "name": "subSystemLabel",
            "baseName": "subSystemLabel",
            "type": "string",
            "format": ""
        },
        {
            "name": "highImpact",
            "baseName": "highImpact",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "populations",
            "baseName": "populations",
            "type": "Array<MetricsInsightPopulationsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricsInsight.attributeTypeMap;
    }

    public constructor() {
    }
}



