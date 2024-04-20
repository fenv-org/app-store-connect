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

import { AlternativeDistributionPackageVersion } from '../models/AlternativeDistributionPackageVersion.ts';
import { AlternativeDistributionPackageVersionsResponseIncludedInner } from '../models/AlternativeDistributionPackageVersionsResponseIncludedInner.ts';
import { DocumentLinks } from '../models/DocumentLinks.ts';
import { HttpFile } from '../http/http.ts';

export class AlternativeDistributionPackageVersionResponse {
    'data': AlternativeDistributionPackageVersion;
    'included'?: Array<AlternativeDistributionPackageVersionsResponseIncludedInner>;
    'links': DocumentLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AlternativeDistributionPackageVersion",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AlternativeDistributionPackageVersionsResponseIncludedInner>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AlternativeDistributionPackageVersionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
