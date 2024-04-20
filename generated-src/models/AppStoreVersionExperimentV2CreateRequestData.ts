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

import { AlternativeDistributionKeyCreateRequestDataRelationships } from '../models/AlternativeDistributionKeyCreateRequestDataRelationships.ts';
import { AppStoreVersionExperimentV2CreateRequestDataAttributes } from '../models/AppStoreVersionExperimentV2CreateRequestDataAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class AppStoreVersionExperimentV2CreateRequestData {
    'type': AppStoreVersionExperimentV2CreateRequestDataTypeEnum;
    'attributes': AppStoreVersionExperimentV2CreateRequestDataAttributes;
    'relationships': AlternativeDistributionKeyCreateRequestDataRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppStoreVersionExperimentV2CreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppStoreVersionExperimentV2CreateRequestDataAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AlternativeDistributionKeyCreateRequestDataRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppStoreVersionExperimentV2CreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppStoreVersionExperimentV2CreateRequestDataTypeEnum {
    AppStoreVersionExperiments = 'appStoreVersionExperiments'
}
