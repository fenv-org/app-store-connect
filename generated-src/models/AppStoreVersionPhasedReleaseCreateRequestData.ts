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

import { AlternativeDistributionPackageCreateRequestDataRelationships } from '../models/AlternativeDistributionPackageCreateRequestDataRelationships.ts';
import { AppStoreVersionPhasedReleaseCreateRequestDataAttributes } from '../models/AppStoreVersionPhasedReleaseCreateRequestDataAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class AppStoreVersionPhasedReleaseCreateRequestData {
    'type': AppStoreVersionPhasedReleaseCreateRequestDataTypeEnum;
    'attributes'?: AppStoreVersionPhasedReleaseCreateRequestDataAttributes;
    'relationships': AlternativeDistributionPackageCreateRequestDataRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppStoreVersionPhasedReleaseCreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppStoreVersionPhasedReleaseCreateRequestDataAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AlternativeDistributionPackageCreateRequestDataRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppStoreVersionPhasedReleaseCreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppStoreVersionPhasedReleaseCreateRequestDataTypeEnum {
    AppStoreVersionPhasedReleases = 'appStoreVersionPhasedReleases'
}
