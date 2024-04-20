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

import { App } from '../models/App.ts';
import { AppPriceTier } from '../models/AppPriceTier.ts';
import { AppPriceTierRelationships } from '../models/AppPriceTierRelationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { Territory } from '../models/Territory.ts';
import { TerritoryAttributes } from '../models/TerritoryAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class AppPricePointsV2ResponseIncludedInner {
    'type': AppPricePointsV2ResponseIncludedInnerTypeEnum;
    'id': string;
    'attributes'?: TerritoryAttributes;
    'relationships'?: AppPriceTierRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppPricePointsV2ResponseIncludedInnerTypeEnum",
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
            "type": "TerritoryAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppPriceTierRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppPricePointsV2ResponseIncludedInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppPricePointsV2ResponseIncludedInnerTypeEnum {
    Apps = 'apps',
    AppPriceTiers = 'appPriceTiers',
    Territories = 'territories'
}
