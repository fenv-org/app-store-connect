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

import { BetaAppReviewSubmissionCreateRequestDataRelationships } from '../models/BetaAppReviewSubmissionCreateRequestDataRelationships.ts';
import { BetaBuildLocalizationCreateRequestDataAttributes } from '../models/BetaBuildLocalizationCreateRequestDataAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class BetaBuildLocalizationCreateRequestData {
    'type': BetaBuildLocalizationCreateRequestDataTypeEnum;
    'attributes': BetaBuildLocalizationCreateRequestDataAttributes;
    'relationships': BetaAppReviewSubmissionCreateRequestDataRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BetaBuildLocalizationCreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "BetaBuildLocalizationCreateRequestDataAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "BetaAppReviewSubmissionCreateRequestDataRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BetaBuildLocalizationCreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BetaBuildLocalizationCreateRequestDataTypeEnum {
    BetaBuildLocalizations = 'betaBuildLocalizations'
}

