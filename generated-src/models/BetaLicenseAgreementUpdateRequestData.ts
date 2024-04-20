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

import { BetaLicenseAgreementAttributes } from '../models/BetaLicenseAgreementAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class BetaLicenseAgreementUpdateRequestData {
    'type': BetaLicenseAgreementUpdateRequestDataTypeEnum;
    'id': string;
    'attributes'?: BetaLicenseAgreementAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BetaLicenseAgreementUpdateRequestDataTypeEnum",
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
            "type": "BetaLicenseAgreementAttributes",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BetaLicenseAgreementUpdateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BetaLicenseAgreementUpdateRequestDataTypeEnum {
    BetaLicenseAgreements = 'betaLicenseAgreements'
}

