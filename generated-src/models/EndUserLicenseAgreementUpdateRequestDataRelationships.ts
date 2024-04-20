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

import { EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories } from '../models/EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories.ts';
import { HttpFile } from '../http/http.ts';

export class EndUserLicenseAgreementUpdateRequestDataRelationships {
    'territories'?: EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "territories",
            "baseName": "territories",
            "type": "EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EndUserLicenseAgreementUpdateRequestDataRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}
