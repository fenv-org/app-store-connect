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

import { CiTestDestination } from '../models/CiTestDestination.ts';
import { HttpFile } from '../http/http.ts';

export class CiActionTestConfiguration {
    'kind'?: CiActionTestConfigurationKindEnum;
    'testPlanName'?: string;
    'testDestinations'?: Array<CiTestDestination>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "kind",
            "baseName": "kind",
            "type": "CiActionTestConfigurationKindEnum",
            "format": ""
        },
        {
            "name": "testPlanName",
            "baseName": "testPlanName",
            "type": "string",
            "format": ""
        },
        {
            "name": "testDestinations",
            "baseName": "testDestinations",
            "type": "Array<CiTestDestination>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CiActionTestConfiguration.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CiActionTestConfigurationKindEnum {
    UseSchemeSettings = 'USE_SCHEME_SETTINGS',
    SpecificTestPlans = 'SPECIFIC_TEST_PLANS'
}

