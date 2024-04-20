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

import { CiBranchPatternsPatternsInner } from '../models/CiBranchPatternsPatternsInner.ts';
import { HttpFile } from '../http/http.ts';

export class CiBranchPatterns {
    'isAllMatch'?: boolean;
    'patterns'?: Array<CiBranchPatternsPatternsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isAllMatch",
            "baseName": "isAllMatch",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "patterns",
            "baseName": "patterns",
            "type": "Array<CiBranchPatternsPatternsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CiBranchPatterns.attributeTypeMap;
    }

    public constructor() {
    }
}
