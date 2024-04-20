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

import { BetaGroupUpdateRequestDataAttributes } from '../models/BetaGroupUpdateRequestDataAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class BetaGroupUpdateRequestData {
    'type': BetaGroupUpdateRequestDataTypeEnum;
    'id': string;
    'attributes'?: BetaGroupUpdateRequestDataAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BetaGroupUpdateRequestDataTypeEnum",
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
            "type": "BetaGroupUpdateRequestDataAttributes",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BetaGroupUpdateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BetaGroupUpdateRequestDataTypeEnum {
    BetaGroups = 'betaGroups'
}
