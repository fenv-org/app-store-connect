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

import { AgeRatingDeclaration } from '../models/AgeRatingDeclaration.ts';
import { App } from '../models/App.ts';
import { AppCategory } from '../models/AppCategory.ts';
import { AppCategoryAttributes } from '../models/AppCategoryAttributes.ts';
import { AppCategoryRelationships } from '../models/AppCategoryRelationships.ts';
import { AppInfoLocalization } from '../models/AppInfoLocalization.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class AppInfosResponseIncludedInner {
    'type': AppInfosResponseIncludedInnerTypeEnum;
    'id': string;
    'attributes'?: AppCategoryAttributes;
    'relationships'?: AppCategoryRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppInfosResponseIncludedInnerTypeEnum",
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
            "type": "AppCategoryAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppCategoryRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppInfosResponseIncludedInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppInfosResponseIncludedInnerTypeEnum {
    Apps = 'apps',
    AgeRatingDeclarations = 'ageRatingDeclarations',
    AppInfoLocalizations = 'appInfoLocalizations',
    AppCategories = 'appCategories'
}
