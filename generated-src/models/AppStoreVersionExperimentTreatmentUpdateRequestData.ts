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

import { AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes } from '../models/AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class AppStoreVersionExperimentTreatmentUpdateRequestData {
    'type': AppStoreVersionExperimentTreatmentUpdateRequestDataTypeEnum;
    'id': string;
    'attributes'?: AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppStoreVersionExperimentTreatmentUpdateRequestDataTypeEnum",
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
            "type": "AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AppStoreVersionExperimentTreatmentUpdateRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AppStoreVersionExperimentTreatmentUpdateRequestDataTypeEnum {
    AppStoreVersionExperimentTreatments = 'appStoreVersionExperimentTreatments'
}

