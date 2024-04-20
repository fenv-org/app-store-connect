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

import { ResourceLinks } from '../models/ResourceLinks.ts';
import { SandboxTesterV2Attributes } from '../models/SandboxTesterV2Attributes.ts';
import { HttpFile } from '../http/http.ts';

export class SandboxTesterV2 {
    'type': SandboxTesterV2TypeEnum;
    'id': string;
    'attributes'?: SandboxTesterV2Attributes;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SandboxTesterV2TypeEnum",
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
            "type": "SandboxTesterV2Attributes",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SandboxTesterV2.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum SandboxTesterV2TypeEnum {
    SandboxTesters = 'sandboxTesters'
}
