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
import { AppAttributes } from '../models/AppAttributes.ts';
import { AppRelationships } from '../models/AppRelationships.ts';
import { BundleIdCapability } from '../models/BundleIdCapability.ts';
import { Profile } from '../models/Profile.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class BundleIdsResponseIncludedInner {
    'type': BundleIdsResponseIncludedInnerTypeEnum;
    'id': string;
    'attributes'?: AppAttributes;
    'relationships'?: AppRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BundleIdsResponseIncludedInnerTypeEnum",
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
            "type": "AppAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BundleIdsResponseIncludedInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BundleIdsResponseIncludedInnerTypeEnum {
    Profiles = 'profiles',
    BundleIdCapabilities = 'bundleIdCapabilities',
    Apps = 'apps'
}

