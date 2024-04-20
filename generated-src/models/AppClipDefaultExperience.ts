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

import { AppClipDefaultExperienceAttributes } from '../models/AppClipDefaultExperienceAttributes.ts';
import { AppClipDefaultExperienceRelationships } from '../models/AppClipDefaultExperienceRelationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class AppClipDefaultExperience {
    'type': AppClipDefaultExperienceTypeEnum;
    'id': string;
    'attributes'?: AppClipDefaultExperienceAttributes;
    'relationships'?: AppClipDefaultExperienceRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppClipDefaultExperienceTypeEnum",
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
            "type": "AppClipDefaultExperienceAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppClipDefaultExperienceRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppClipDefaultExperience.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppClipDefaultExperienceTypeEnum {
    AppClipDefaultExperiences = 'appClipDefaultExperiences'
}

