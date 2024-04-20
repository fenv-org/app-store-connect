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

import { AppInfoUpdateRequestDataRelationshipsPrimaryCategory } from '../models/AppInfoUpdateRequestDataRelationshipsPrimaryCategory.ts';
import { HttpFile } from '../http/http.ts';

export class AppInfoUpdateRequestDataRelationships {
    'primaryCategory'?: AppInfoUpdateRequestDataRelationshipsPrimaryCategory;
    'primarySubcategoryOne'?: AppInfoUpdateRequestDataRelationshipsPrimaryCategory;
    'primarySubcategoryTwo'?: AppInfoUpdateRequestDataRelationshipsPrimaryCategory;
    'secondaryCategory'?: AppInfoUpdateRequestDataRelationshipsPrimaryCategory;
    'secondarySubcategoryOne'?: AppInfoUpdateRequestDataRelationshipsPrimaryCategory;
    'secondarySubcategoryTwo'?: AppInfoUpdateRequestDataRelationshipsPrimaryCategory;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "primaryCategory",
            "baseName": "primaryCategory",
            "type": "AppInfoUpdateRequestDataRelationshipsPrimaryCategory",
            "format": ""
        },
        {
            "name": "primarySubcategoryOne",
            "baseName": "primarySubcategoryOne",
            "type": "AppInfoUpdateRequestDataRelationshipsPrimaryCategory",
            "format": ""
        },
        {
            "name": "primarySubcategoryTwo",
            "baseName": "primarySubcategoryTwo",
            "type": "AppInfoUpdateRequestDataRelationshipsPrimaryCategory",
            "format": ""
        },
        {
            "name": "secondaryCategory",
            "baseName": "secondaryCategory",
            "type": "AppInfoUpdateRequestDataRelationshipsPrimaryCategory",
            "format": ""
        },
        {
            "name": "secondarySubcategoryOne",
            "baseName": "secondarySubcategoryOne",
            "type": "AppInfoUpdateRequestDataRelationshipsPrimaryCategory",
            "format": ""
        },
        {
            "name": "secondarySubcategoryTwo",
            "baseName": "secondarySubcategoryTwo",
            "type": "AppInfoUpdateRequestDataRelationshipsPrimaryCategory",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppInfoUpdateRequestDataRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}
