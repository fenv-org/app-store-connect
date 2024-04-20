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

import { AlternativeDistributionKeyCreateRequestDataRelationshipsApp } from '../models/AlternativeDistributionKeyCreateRequestDataRelationshipsApp.ts';
import { BetaTesterInvitationCreateRequestDataRelationshipsBetaTester } from '../models/BetaTesterInvitationCreateRequestDataRelationshipsBetaTester.ts';
import { HttpFile } from '../http/http.ts';

export class BetaTesterInvitationCreateRequestDataRelationships {
    'betaTester': BetaTesterInvitationCreateRequestDataRelationshipsBetaTester;
    'app': AlternativeDistributionKeyCreateRequestDataRelationshipsApp;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "betaTester",
            "baseName": "betaTester",
            "type": "BetaTesterInvitationCreateRequestDataRelationshipsBetaTester",
            "format": ""
        },
        {
            "name": "app",
            "baseName": "app",
            "type": "AlternativeDistributionKeyCreateRequestDataRelationshipsApp",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BetaTesterInvitationCreateRequestDataRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}
