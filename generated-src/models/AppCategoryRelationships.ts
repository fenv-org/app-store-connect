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

import { AppCategoryRelationshipsParent } from '../models/AppCategoryRelationshipsParent.ts';
import { AppCategoryRelationshipsSubcategories } from '../models/AppCategoryRelationshipsSubcategories.ts';
import { HttpFile } from '../http/http.ts';

export class AppCategoryRelationships {
    'subcategories'?: AppCategoryRelationshipsSubcategories;
    'parent'?: AppCategoryRelationshipsParent;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "subcategories",
            "baseName": "subcategories",
            "type": "AppCategoryRelationshipsSubcategories",
            "format": ""
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "AppCategoryRelationshipsParent",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppCategoryRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}
