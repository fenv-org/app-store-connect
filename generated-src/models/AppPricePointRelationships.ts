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

import { AppPricePointV2RelationshipsPriceTier } from '../models/AppPricePointV2RelationshipsPriceTier.ts';
import { AppPricePointV2RelationshipsTerritory } from '../models/AppPricePointV2RelationshipsTerritory.ts';
import { HttpFile } from '../http/http.ts';

export class AppPricePointRelationships {
    'priceTier'?: AppPricePointV2RelationshipsPriceTier;
    'territory'?: AppPricePointV2RelationshipsTerritory;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "priceTier",
            "baseName": "priceTier",
            "type": "AppPricePointV2RelationshipsPriceTier",
            "format": ""
        },
        {
            "name": "territory",
            "baseName": "territory",
            "type": "AppPricePointV2RelationshipsTerritory",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppPricePointRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}

