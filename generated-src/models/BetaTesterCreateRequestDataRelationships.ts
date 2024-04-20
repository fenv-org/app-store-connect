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

import { BetaGroupCreateRequestDataRelationshipsBuilds } from '../models/BetaGroupCreateRequestDataRelationshipsBuilds.ts';
import { BetaTesterCreateRequestDataRelationshipsBetaGroups } from '../models/BetaTesterCreateRequestDataRelationshipsBetaGroups.ts';
import { HttpFile } from '../http/http.ts';

export class BetaTesterCreateRequestDataRelationships {
    'betaGroups'?: BetaTesterCreateRequestDataRelationshipsBetaGroups;
    'builds'?: BetaGroupCreateRequestDataRelationshipsBuilds;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "betaGroups",
            "baseName": "betaGroups",
            "type": "BetaTesterCreateRequestDataRelationshipsBetaGroups",
            "format": ""
        },
        {
            "name": "builds",
            "baseName": "builds",
            "type": "BetaGroupCreateRequestDataRelationshipsBuilds",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BetaTesterCreateRequestDataRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}
