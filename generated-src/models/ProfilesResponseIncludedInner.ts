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

import { BundleId } from '../models/BundleId.ts';
import { BundleIdRelationships } from '../models/BundleIdRelationships.ts';
import { Certificate } from '../models/Certificate.ts';
import { CertificateAttributes } from '../models/CertificateAttributes.ts';
import { Device } from '../models/Device.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class ProfilesResponseIncludedInner {
    'type': ProfilesResponseIncludedInnerTypeEnum;
    'id': string;
    'attributes'?: CertificateAttributes;
    'relationships'?: BundleIdRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ProfilesResponseIncludedInnerTypeEnum",
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
            "type": "CertificateAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "BundleIdRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProfilesResponseIncludedInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ProfilesResponseIncludedInnerTypeEnum {
    BundleIds = 'bundleIds',
    Devices = 'devices',
    Certificates = 'certificates'
}
