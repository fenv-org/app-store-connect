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

import { AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage } from '../models/AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage.ts';
import { AlternativeDistributionPackageVersionRelationshipsDeltas } from '../models/AlternativeDistributionPackageVersionRelationshipsDeltas.ts';
import { AlternativeDistributionPackageVersionRelationshipsVariants } from '../models/AlternativeDistributionPackageVersionRelationshipsVariants.ts';
import { HttpFile } from '../http/http.ts';

export class AlternativeDistributionPackageVersionRelationships {
    'variants'?: AlternativeDistributionPackageVersionRelationshipsVariants;
    'deltas'?: AlternativeDistributionPackageVersionRelationshipsDeltas;
    'alternativeDistributionPackage'?: AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "variants",
            "baseName": "variants",
            "type": "AlternativeDistributionPackageVersionRelationshipsVariants",
            "format": ""
        },
        {
            "name": "deltas",
            "baseName": "deltas",
            "type": "AlternativeDistributionPackageVersionRelationshipsDeltas",
            "format": ""
        },
        {
            "name": "alternativeDistributionPackage",
            "baseName": "alternativeDistributionPackage",
            "type": "AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AlternativeDistributionPackageVersionRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}
