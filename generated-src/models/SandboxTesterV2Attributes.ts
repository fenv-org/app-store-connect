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

import { TerritoryCode } from '../models/TerritoryCode.ts';
import { HttpFile } from '../http/http.ts';

export class SandboxTesterV2Attributes {
    'firstName'?: string;
    'lastName'?: string;
    'acAccountName'?: string;
    'territory'?: TerritoryCode;
    'applePayCompatible'?: boolean;
    'interruptPurchases'?: boolean;
    'subscriptionRenewalRate'?: SandboxTesterV2AttributesSubscriptionRenewalRateEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "acAccountName",
            "baseName": "acAccountName",
            "type": "string",
            "format": ""
        },
        {
            "name": "territory",
            "baseName": "territory",
            "type": "TerritoryCode",
            "format": ""
        },
        {
            "name": "applePayCompatible",
            "baseName": "applePayCompatible",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "interruptPurchases",
            "baseName": "interruptPurchases",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "subscriptionRenewalRate",
            "baseName": "subscriptionRenewalRate",
            "type": "SandboxTesterV2AttributesSubscriptionRenewalRateEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SandboxTesterV2Attributes.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum SandboxTesterV2AttributesSubscriptionRenewalRateEnum {
    OneHour = 'MONTHLY_RENEWAL_EVERY_ONE_HOUR',
    ThirtyMinutes = 'MONTHLY_RENEWAL_EVERY_THIRTY_MINUTES',
    FifteenMinutes = 'MONTHLY_RENEWAL_EVERY_FIFTEEN_MINUTES',
    FiveMinutes = 'MONTHLY_RENEWAL_EVERY_FIVE_MINUTES',
    ThreeMinutes = 'MONTHLY_RENEWAL_EVERY_THREE_MINUTES'
}

