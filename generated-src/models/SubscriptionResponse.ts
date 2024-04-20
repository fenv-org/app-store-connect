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
import { Subscription } from '../models/Subscription.ts';
import { SubscriptionsResponseIncludedInner } from '../models/SubscriptionsResponseIncludedInner.ts';
import { HttpFile } from '../http/http.ts';

export class SubscriptionResponse {
    'data': Subscription;
    'included'?: Array<SubscriptionsResponseIncludedInner>;
    'links': DocumentLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Subscription",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<SubscriptionsResponseIncludedInner>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

