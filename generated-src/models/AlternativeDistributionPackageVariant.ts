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

import { AlternativeDistributionPackageDeltaAttributes } from '../models/AlternativeDistributionPackageDeltaAttributes.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class AlternativeDistributionPackageVariant {
    'type': AlternativeDistributionPackageVariantTypeEnum;
    'id': string;
    'attributes'?: AlternativeDistributionPackageDeltaAttributes;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AlternativeDistributionPackageVariantTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AlternativeDistributionPackageDeltaAttributes",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AlternativeDistributionPackageVariant.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AlternativeDistributionPackageVariantTypeEnum {
    AlternativeDistributionPackageVariants = 'alternativeDistributionPackageVariants'
}

