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

import { AppPricePointV2Attributes } from '../models/AppPricePointV2Attributes.ts';
import { AppPricePointV2Relationships } from '../models/AppPricePointV2Relationships.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { HttpFile } from '../http/http.ts';

export class AppPricePointV2 {
    'type': AppPricePointV2TypeEnum;
    'id': string;
    'attributes'?: AppPricePointV2Attributes;
    'relationships'?: AppPricePointV2Relationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppPricePointV2TypeEnum",
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
            "type": "AppPricePointV2Attributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppPricePointV2Relationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppPricePointV2.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppPricePointV2TypeEnum {
    AppPricePoints = 'appPricePoints'
}

