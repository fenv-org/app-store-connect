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

import { BetaAppClipInvocationLocalizationCreateRequestDataRelationships } from '../models/BetaAppClipInvocationLocalizationCreateRequestDataRelationships.ts';
import { BetaAppClipInvocationLocalizationInlineCreateAttributes } from '../models/BetaAppClipInvocationLocalizationInlineCreateAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class BetaAppClipInvocationLocalizationCreateRequestData {
    'type': BetaAppClipInvocationLocalizationCreateRequestDataTypeEnum;
    'attributes': BetaAppClipInvocationLocalizationInlineCreateAttributes;
    'relationships': BetaAppClipInvocationLocalizationCreateRequestDataRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BetaAppClipInvocationLocalizationCreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "BetaAppClipInvocationLocalizationInlineCreateAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "BetaAppClipInvocationLocalizationCreateRequestDataRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BetaAppClipInvocationLocalizationCreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BetaAppClipInvocationLocalizationCreateRequestDataTypeEnum {
    BetaAppClipInvocationLocalizations = 'betaAppClipInvocationLocalizations'
}
