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

import { AppStoreReviewDetailAttributes } from '../models/AppStoreReviewDetailAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class BetaAppReviewDetailUpdateRequestData {
    'type': BetaAppReviewDetailUpdateRequestDataTypeEnum;
    'id': string;
    'attributes'?: AppStoreReviewDetailAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BetaAppReviewDetailUpdateRequestDataTypeEnum",
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
            "type": "AppStoreReviewDetailAttributes",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BetaAppReviewDetailUpdateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BetaAppReviewDetailUpdateRequestDataTypeEnum {
    BetaAppReviewDetails = 'betaAppReviewDetails'
}
