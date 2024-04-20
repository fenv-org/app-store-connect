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

import { App } from '../models/App.ts';
import { AppPriceV2 } from '../models/AppPriceV2.ts';
import { AppPriceV2Attributes } from '../models/AppPriceV2Attributes.ts';
import { AppPriceV2Relationships } from '../models/AppPriceV2Relationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { Territory } from '../models/Territory.ts';
import { HttpFile } from '../http/http.ts';

export class AppPriceScheduleResponseIncludedInner {
    'type': AppPriceScheduleResponseIncludedInnerTypeEnum;
    'id': string;
    'attributes'?: AppPriceV2Attributes;
    'relationships'?: AppPriceV2Relationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppPriceScheduleResponseIncludedInnerTypeEnum",
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
            "type": "AppPriceV2Attributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppPriceV2Relationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppPriceScheduleResponseIncludedInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppPriceScheduleResponseIncludedInnerTypeEnum {
    Apps = 'apps',
    Territories = 'territories',
    AppPrices = 'appPrices'
}

