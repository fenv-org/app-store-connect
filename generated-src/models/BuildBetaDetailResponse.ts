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

import { Build } from '../models/Build.ts';
import { BuildBetaDetail } from '../models/BuildBetaDetail.ts';
import { DocumentLinks } from '../models/DocumentLinks.ts';
import { HttpFile } from '../http/http.ts';

export class BuildBetaDetailResponse {
    'data': BuildBetaDetail;
    'included'?: Array<Build>;
    'links': DocumentLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "BuildBetaDetail",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<Build>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BuildBetaDetailResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

