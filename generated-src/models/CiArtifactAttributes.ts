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

export class CiArtifactAttributes {
    'fileType'?: CiArtifactAttributesFileTypeEnum;
    'fileName'?: string;
    'fileSize'?: number;
    'downloadUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fileType",
            "baseName": "fileType",
            "type": "CiArtifactAttributesFileTypeEnum",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileSize",
            "baseName": "fileSize",
            "type": "number",
            "format": ""
        },
        {
            "name": "downloadUrl",
            "baseName": "downloadUrl",
            "type": "string",
            "format": "uri"
        }    ];

    static getAttributeTypeMap() {
        return CiArtifactAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CiArtifactAttributesFileTypeEnum {
    Archive = 'ARCHIVE',
    ArchiveExport = 'ARCHIVE_EXPORT',
    LogBundle = 'LOG_BUNDLE',
    ResultBundle = 'RESULT_BUNDLE',
    TestProducts = 'TEST_PRODUCTS',
    XcodebuildProducts = 'XCODEBUILD_PRODUCTS',
    StapledNotarizedArchive = 'STAPLED_NOTARIZED_ARCHIVE'
}
