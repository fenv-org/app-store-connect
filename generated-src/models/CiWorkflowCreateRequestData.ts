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

import { CiWorkflowCreateRequestDataAttributes } from '../models/CiWorkflowCreateRequestDataAttributes.ts';
import { CiWorkflowCreateRequestDataRelationships } from '../models/CiWorkflowCreateRequestDataRelationships.ts';
import { HttpFile } from '../http/http.ts';

export class CiWorkflowCreateRequestData {
    'type': CiWorkflowCreateRequestDataTypeEnum;
    'attributes': CiWorkflowCreateRequestDataAttributes;
    'relationships': CiWorkflowCreateRequestDataRelationships;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CiWorkflowCreateRequestDataTypeEnum",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CiWorkflowCreateRequestDataAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "CiWorkflowCreateRequestDataRelationships",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CiWorkflowCreateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CiWorkflowCreateRequestDataTypeEnum {
    CiWorkflows = 'ciWorkflows'
}
