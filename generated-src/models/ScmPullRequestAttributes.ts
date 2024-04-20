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

import { HttpFile } from '../http/http.ts';

export class ScmPullRequestAttributes {
    'title'?: string;
    'number'?: number;
    'webUrl'?: string;
    'sourceRepositoryOwner'?: string;
    'sourceRepositoryName'?: string;
    'sourceBranchName'?: string;
    'destinationRepositoryOwner'?: string;
    'destinationRepositoryName'?: string;
    'destinationBranchName'?: string;
    'isClosed'?: boolean;
    'isCrossRepository'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "number",
            "format": ""
        },
        {
            "name": "webUrl",
            "baseName": "webUrl",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "sourceRepositoryOwner",
            "baseName": "sourceRepositoryOwner",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceRepositoryName",
            "baseName": "sourceRepositoryName",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceBranchName",
            "baseName": "sourceBranchName",
            "type": "string",
            "format": ""
        },
        {
            "name": "destinationRepositoryOwner",
            "baseName": "destinationRepositoryOwner",
            "type": "string",
            "format": ""
        },
        {
            "name": "destinationRepositoryName",
            "baseName": "destinationRepositoryName",
            "type": "string",
            "format": ""
        },
        {
            "name": "destinationBranchName",
            "baseName": "destinationBranchName",
            "type": "string",
            "format": ""
        },
        {
            "name": "isClosed",
            "baseName": "isClosed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isCrossRepository",
            "baseName": "isCrossRepository",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ScmPullRequestAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}

