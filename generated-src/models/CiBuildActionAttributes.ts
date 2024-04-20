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

import { CiActionType } from '../models/CiActionType.ts';
import { CiCompletionStatus } from '../models/CiCompletionStatus.ts';
import { CiExecutionProgress } from '../models/CiExecutionProgress.ts';
import { CiIssueCounts } from '../models/CiIssueCounts.ts';
import { HttpFile } from '../http/http.ts';

export class CiBuildActionAttributes {
    'name'?: string;
    'actionType'?: CiActionType;
    'startedDate'?: Date;
    'finishedDate'?: Date;
    'issueCounts'?: CiIssueCounts;
    'executionProgress'?: CiExecutionProgress;
    'completionStatus'?: CiCompletionStatus;
    'isRequiredToPass'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "actionType",
            "baseName": "actionType",
            "type": "CiActionType",
            "format": ""
        },
        {
            "name": "startedDate",
            "baseName": "startedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "finishedDate",
            "baseName": "finishedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "issueCounts",
            "baseName": "issueCounts",
            "type": "CiIssueCounts",
            "format": ""
        },
        {
            "name": "executionProgress",
            "baseName": "executionProgress",
            "type": "CiExecutionProgress",
            "format": ""
        },
        {
            "name": "completionStatus",
            "baseName": "completionStatus",
            "type": "CiCompletionStatus",
            "format": ""
        },
        {
            "name": "isRequiredToPass",
            "baseName": "isRequiredToPass",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CiBuildActionAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}


