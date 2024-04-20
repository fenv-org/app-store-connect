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

import { AppInfoLocalizationAttributes } from '../models/AppInfoLocalizationAttributes.ts';
import { AppInfoLocalizationRelationships } from '../models/AppInfoLocalizationRelationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class AppInfoLocalization {
    'type': AppInfoLocalizationTypeEnum;
    'id': string;
    'attributes'?: AppInfoLocalizationAttributes;
    'relationships'?: AppInfoLocalizationRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppInfoLocalizationTypeEnum",
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
            "type": "AppInfoLocalizationAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppInfoLocalizationRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppInfoLocalization.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppInfoLocalizationTypeEnum {
    AppInfoLocalizations = 'appInfoLocalizations'
}

