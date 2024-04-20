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

import { CiAction } from '../models/CiAction.ts';
import { CiBranchStartCondition } from '../models/CiBranchStartCondition.ts';
import { CiManualBranchStartCondition } from '../models/CiManualBranchStartCondition.ts';
import { CiManualPullRequestStartCondition } from '../models/CiManualPullRequestStartCondition.ts';
import { CiManualTagStartCondition } from '../models/CiManualTagStartCondition.ts';
import { CiPullRequestStartCondition } from '../models/CiPullRequestStartCondition.ts';
import { CiScheduledStartCondition } from '../models/CiScheduledStartCondition.ts';
import { CiTagStartCondition } from '../models/CiTagStartCondition.ts';
import { HttpFile } from '../http/http.ts';

export class CiWorkflowAttributes {
    'name'?: string;
    'description'?: string;
    'branchStartCondition'?: CiBranchStartCondition;
    'tagStartCondition'?: CiTagStartCondition;
    'pullRequestStartCondition'?: CiPullRequestStartCondition;
    'scheduledStartCondition'?: CiScheduledStartCondition;
    'manualBranchStartCondition'?: CiManualBranchStartCondition;
    'manualTagStartCondition'?: CiManualTagStartCondition;
    'manualPullRequestStartCondition'?: CiManualPullRequestStartCondition;
    'actions'?: Array<CiAction>;
    'isEnabled'?: boolean;
    'isLockedForEditing'?: boolean;
    'clean'?: boolean;
    'containerFilePath'?: string;
    'lastModifiedDate'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "branchStartCondition",
            "baseName": "branchStartCondition",
            "type": "CiBranchStartCondition",
            "format": ""
        },
        {
            "name": "tagStartCondition",
            "baseName": "tagStartCondition",
            "type": "CiTagStartCondition",
            "format": ""
        },
        {
            "name": "pullRequestStartCondition",
            "baseName": "pullRequestStartCondition",
            "type": "CiPullRequestStartCondition",
            "format": ""
        },
        {
            "name": "scheduledStartCondition",
            "baseName": "scheduledStartCondition",
            "type": "CiScheduledStartCondition",
            "format": ""
        },
        {
            "name": "manualBranchStartCondition",
            "baseName": "manualBranchStartCondition",
            "type": "CiManualBranchStartCondition",
            "format": ""
        },
        {
            "name": "manualTagStartCondition",
            "baseName": "manualTagStartCondition",
            "type": "CiManualTagStartCondition",
            "format": ""
        },
        {
            "name": "manualPullRequestStartCondition",
            "baseName": "manualPullRequestStartCondition",
            "type": "CiManualPullRequestStartCondition",
            "format": ""
        },
        {
            "name": "actions",
            "baseName": "actions",
            "type": "Array<CiAction>",
            "format": ""
        },
        {
            "name": "isEnabled",
            "baseName": "isEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isLockedForEditing",
            "baseName": "isLockedForEditing",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "clean",
            "baseName": "clean",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "containerFilePath",
            "baseName": "containerFilePath",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastModifiedDate",
            "baseName": "lastModifiedDate",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return CiWorkflowAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}

