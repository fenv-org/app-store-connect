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

import { CiMacOsVersionAttributes } from '../models/CiMacOsVersionAttributes.ts';
import { CiMacOsVersionRelationships } from '../models/CiMacOsVersionRelationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class CiMacOsVersion {
    'type': CiMacOsVersionTypeEnum;
    'id': string;
    'attributes'?: CiMacOsVersionAttributes;
    'relationships'?: CiMacOsVersionRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CiMacOsVersionTypeEnum",
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
            "type": "CiMacOsVersionAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "CiMacOsVersionRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CiMacOsVersion.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CiMacOsVersionTypeEnum {
    CiMacOsVersions = 'ciMacOsVersions'
}

