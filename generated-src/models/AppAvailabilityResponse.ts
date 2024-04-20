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

import { AppAvailability } from '../models/AppAvailability.ts';
import { AppAvailabilityResponseIncludedInner } from '../models/AppAvailabilityResponseIncludedInner.ts';
import { DocumentLinks } from '../models/DocumentLinks.ts';
import { HttpFile } from '../http/http.ts';

export class AppAvailabilityResponse {
    'data': AppAvailability;
    'included'?: Array<AppAvailabilityResponseIncludedInner>;
    'links': DocumentLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppAvailability",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppAvailabilityResponseIncludedInner>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppAvailabilityResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
