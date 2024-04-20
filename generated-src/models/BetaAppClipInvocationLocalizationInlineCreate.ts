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

import { BetaAppClipInvocationLocalizationInlineCreateAttributes } from '../models/BetaAppClipInvocationLocalizationInlineCreateAttributes.ts';
import { BetaAppClipInvocationLocalizationInlineCreateRelationships } from '../models/BetaAppClipInvocationLocalizationInlineCreateRelationships.ts';
import { HttpFile } from '../http/http.ts';

export class BetaAppClipInvocationLocalizationInlineCreate {
    'type': BetaAppClipInvocationLocalizationInlineCreateTypeEnum;
    'id'?: string;
    'attributes': BetaAppClipInvocationLocalizationInlineCreateAttributes;
    'relationships'?: BetaAppClipInvocationLocalizationInlineCreateRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BetaAppClipInvocationLocalizationInlineCreateTypeEnum",
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
            "type": "BetaAppClipInvocationLocalizationInlineCreateAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "BetaAppClipInvocationLocalizationInlineCreateRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BetaAppClipInvocationLocalizationInlineCreate.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BetaAppClipInvocationLocalizationInlineCreateTypeEnum {
    BetaAppClipInvocationLocalizations = 'betaAppClipInvocationLocalizations'
}
