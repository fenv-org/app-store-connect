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

import { UserRole } from '../models/UserRole.ts';
import { HttpFile } from '../http/http.ts';

export class UserAttributes {
    'username'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'roles'?: Array<UserRole>;
    'allAppsVisible'?: boolean;
    'provisioningAllowed'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<UserRole>",
            "format": ""
        },
        {
            "name": "allAppsVisible",
            "baseName": "allAppsVisible",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "provisioningAllowed",
            "baseName": "provisioningAllowed",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}
