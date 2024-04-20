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

import { AlternativeDistributionDomainCreateRequestDataAttributes } from '../models/AlternativeDistributionDomainCreateRequestDataAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class MarketplaceDomainCreateRequestData {
    'type': MarketplaceDomainCreateRequestDataTypeEnum;
    'attributes': AlternativeDistributionDomainCreateRequestDataAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "MarketplaceDomainCreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AlternativeDistributionDomainCreateRequestDataAttributes",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MarketplaceDomainCreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum MarketplaceDomainCreateRequestDataTypeEnum {
    MarketplaceDomains = 'marketplaceDomains'
}

