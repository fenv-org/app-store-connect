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

export class BuildBundleAttributes {
    'bundleId'?: string;
    'bundleType'?: BuildBundleAttributesBundleTypeEnum;
    'sdkBuild'?: string;
    'platformBuild'?: string;
    'fileName'?: string;
    'hasSirikit'?: boolean;
    'hasOnDemandResources'?: boolean;
    'hasPrerenderedIcon'?: boolean;
    'usesLocationServices'?: boolean;
    'isIosBuildMacAppStoreCompatible'?: boolean;
    'includesSymbols'?: boolean;
    'dSYMUrl'?: string;
    'supportedArchitectures'?: Array<string>;
    'requiredCapabilities'?: Array<string>;
    'deviceProtocols'?: Array<string>;
    'locales'?: Array<string>;
    'entitlements'?: { [key: string]: { [key: string]: string; }; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bundleId",
            "baseName": "bundleId",
            "type": "string",
            "format": ""
        },
        {
            "name": "bundleType",
            "baseName": "bundleType",
            "type": "BuildBundleAttributesBundleTypeEnum",
            "format": ""
        },
        {
            "name": "sdkBuild",
            "baseName": "sdkBuild",
            "type": "string",
            "format": ""
        },
        {
            "name": "platformBuild",
            "baseName": "platformBuild",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasSirikit",
            "baseName": "hasSirikit",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasOnDemandResources",
            "baseName": "hasOnDemandResources",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasPrerenderedIcon",
            "baseName": "hasPrerenderedIcon",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "usesLocationServices",
            "baseName": "usesLocationServices",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isIosBuildMacAppStoreCompatible",
            "baseName": "isIosBuildMacAppStoreCompatible",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "includesSymbols",
            "baseName": "includesSymbols",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "dSYMUrl",
            "baseName": "dSYMUrl",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "supportedArchitectures",
            "baseName": "supportedArchitectures",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "requiredCapabilities",
            "baseName": "requiredCapabilities",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "deviceProtocols",
            "baseName": "deviceProtocols",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "locales",
            "baseName": "locales",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "entitlements",
            "baseName": "entitlements",
            "type": "{ [key: string]: { [key: string]: string; }; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BuildBundleAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BuildBundleAttributesBundleTypeEnum {
    App = 'APP',
    AppClip = 'APP_CLIP'
}

