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

export class SubscriptionOfferCodeOneTimeUseCodeAttributes {
    'numberOfCodes'?: number;
    'createdDate'?: Date;
    'expirationDate'?: string;
    'active'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "numberOfCodes",
            "baseName": "numberOfCodes",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "expirationDate",
            "baseName": "expirationDate",
            "type": "string",
            "format": "date"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionOfferCodeOneTimeUseCodeAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}
