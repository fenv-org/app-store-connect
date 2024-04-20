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

import { DocumentLinks } from '../models/DocumentLinks.ts';
import { SubscriptionOfferCode } from '../models/SubscriptionOfferCode.ts';
import { SubscriptionOfferCodesResponseIncludedInner } from '../models/SubscriptionOfferCodesResponseIncludedInner.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionOfferCodeResponse {
    'data': SubscriptionOfferCode;
    'included'?: Array<SubscriptionOfferCodesResponseIncludedInner>;
    'links': DocumentLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "SubscriptionOfferCode",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<SubscriptionOfferCodesResponseIncludedInner>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionOfferCodeResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

