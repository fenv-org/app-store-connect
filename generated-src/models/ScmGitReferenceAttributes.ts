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

import { CiGitRefKind } from '../models/CiGitRefKind.ts';
import { HttpFile } from '../http/http.ts';

export class ScmGitReferenceAttributes {
    'name'?: string;
    'canonicalName'?: string;
    'isDeleted'?: boolean;
    'kind'?: CiGitRefKind;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "canonicalName",
            "baseName": "canonicalName",
            "type": "string",
            "format": ""
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "CiGitRefKind",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ScmGitReferenceAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}


