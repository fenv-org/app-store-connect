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

import { CertificateCreateRequestDataAttributes } from '../models/CertificateCreateRequestDataAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class CertificateCreateRequestData {
    'type': CertificateCreateRequestDataTypeEnum;
    'attributes': CertificateCreateRequestDataAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CertificateCreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CertificateCreateRequestDataAttributes",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CertificateCreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CertificateCreateRequestDataTypeEnum {
    Certificates = 'certificates'
}

