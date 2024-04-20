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

export enum CertificateType {
    IosDevelopment = 'IOS_DEVELOPMENT',
    IosDistribution = 'IOS_DISTRIBUTION',
    MacAppDistribution = 'MAC_APP_DISTRIBUTION',
    MacInstallerDistribution = 'MAC_INSTALLER_DISTRIBUTION',
    MacAppDevelopment = 'MAC_APP_DEVELOPMENT',
    DeveloperIdKext = 'DEVELOPER_ID_KEXT',
    DeveloperIdApplication = 'DEVELOPER_ID_APPLICATION',
    Development = 'DEVELOPMENT',
    Distribution = 'DISTRIBUTION',
    PassTypeId = 'PASS_TYPE_ID',
    PassTypeIdWithNfc = 'PASS_TYPE_ID_WITH_NFC'
}
